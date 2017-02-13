import _ from 'lodash'
import {
  SELECT_CHALLENGE,
  RESTART_CHALLENGE,
  NEXT_CHALLENGE,
  CORRECT_ENTRY,
  KEY_PRESS,
} from '../actions/ActionTypes'

const generateFreshSession = (challenges) => {
  return {
    challenges,
    enteredText: "",
    lastPressedKey: "",
    lastPressedKorChar: "",
    currentChallengeIndex: 0,
    correctEntry: false,
    canRestart: true,
    challengeStartTime: new Date(),
    overallChallengeStartTime: new Date(),
    challengeTimes: [],
    noRemainingChallenges: false,
    challengeContent: challenges[0].content,
    challengeTranslation: challenges[0].english,
  }
}

const challengeSessionReducer = (challengeSession = {}, action) => {
  switch(action.type) {
    case CORRECT_ENTRY:
      return Object.assign({}, challengeSession, { correctEntry: true })
    case SELECT_CHALLENGE:
      return Object.assign({}, challengeSession, generateFreshSession(action.challengeCategory.challenges))
    case RESTART_CHALLENGE:
      return Object.assign({}, challengeSession, generateFreshSession(challengeSession.challenges))
    case NEXT_CHALLENGE:
      const newChallengeIndex = challengeSession.currentChallengeIndex += 1
      const noChallenges = newChallengeIndex === (challengeSession.challenges.length - 1)
      return Object.assign({}, challengeSession, {
        enteredText: "",
        lastPressedKey: "",
        lastPressedKorChar: "",
        challengeStartTime: new Date(),
        currentChallengeIndex: newChallengeIndex,
        noRemainingChallenges: noChallenges,
        challengeContent: challengeSession.challenges[newChallengeIndex].content,
        challengeTranslation: challengeSession.challenges[newChallengeIndex].english,
        correctEntry: false,
      })
    case KEY_PRESS:
      const { enteredText, lastPressedKey, lastPressedKorChar } = action.keyData
      const { challengeContent, challengeTimes } = challengeSession
      const newEntryCorrect = challengeContent == enteredText
      let timeToComplete
      if(newEntryCorrect) {
        const finishTime = new Date()
        timeToComplete = (finishTime.getTime() - challengeSession.challengeStartTime.getTime()) / 1000
      }
      return Object.assign({}, challengeSession, {
        correctEntry: newEntryCorrect,
        enteredText,
        lastPressedKey,
        lastPressedKorChar,
        challengeTimes: _.compact(_.concat(challengeTimes, timeToComplete))
      })
    default:
      return challengeSession
  }
}

export default challengeSessionReducer
