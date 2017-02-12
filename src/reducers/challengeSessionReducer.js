import _ from 'lodash'
import {
  SELECT_CHALLENGE,
  RESTART_CHALLENGE,
  NEXT_CHALLENGE,
  CORRECT_ENTRY,
} from '../actions/ActionTypes'

const generateFreshSession = (challenges) => {
  return {
    enteredText: "",
    currentChallengeIndex: 0,
    correctEntry: false,
    canRestart: true,
    challengeStartTime: new Date(),
    challengeTimes: [],
    noRemainingChallenges: false,
    currentChallengeContent: challenges[0].content,
    currentChallengeTranslation: challenges[0].english,

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
      const finishTime = new Date()
      const timeToComplete = (finishTime.getTime() - challengeSession.challengeStartTime.getTime()) / 1000
      return Object.assign({}, challengeSession, {
        enteredText: "",
        currentChallengeIndex: newChallengeIndex,
        noRemainingChallenges: noChallenges,
        currentChallengeContent: challengeSession.challenges[newChallengeIndex].content,
        currentChallengeTranslation: challengeSession.challenges[newChallengeIndex].english,
        correctEntry: false,
        challengeTimes: _.concat(challengeSession.challengeTimes, timeToComplete)
      })
    default:
      return challengeSession
  }
}

export default challengeSessionReducer
