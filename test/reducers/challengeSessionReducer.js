import { expect } from 'chai'
import sinon from 'sinon'
import challengeSessionReducer from '../../src/reducers/challengeSessionReducer'
import {
  SELECT_CHALLENGE,
  RESTART_CHALLENGE,
  NEXT_CHALLENGE,
  CORRECT_ENTRY,
  KEY_PRESS,
} from '../../src/actions/ActionTypes'

describe('challengeSessionReducer', () => {
  beforeEach(() => {
    sinon.useFakeTimers()
  })

  const lastPressedKey = "a"
  const lastPressedKorChar = "z"

  it('sets the correct entry', () => {
    const sessionData = { correctEntry: false }
    const action = { type: CORRECT_ENTRY }
    expect(
      challengeSessionReducer(sessionData, action)
    ).to.eql({ correctEntry: true })
  })

  it('sets the challenges', () => {
    const challenges = [{ name: "something" }]
    const sessionData = { challenges: [] }
    const action = { type: SELECT_CHALLENGE, challengeCategory: { challenges } }
    expect(
      challengeSessionReducer(sessionData, action).challenges
    ).to.eql(challenges)
  })

  describe('challenge lifecycle', () => {
    const enteredText = "some_entered_text"
    const content     = "some_content_here"
    const english     = "some_english_translation"
    const challengeContent     = "some_challenge_content"
    const challengeTranslation = "some_translation_stuff"
    const challenge = { content, english }

    it('restarts the challenge', () => {
      const challenges = [challenge]
      const sessionData = {
        challenges,
        enteredText,
        lastPressedKey,
        lastPressedKorChar,
        currentChallengeIndex: 5,
        canRestart: true,
        correctEntry: false,
        noRemainingChallenges: true,
        challengeTimes: ["123", "456"],
        challengeContent,
        challengeTranslation,
      }
      const action = { type: RESTART_CHALLENGE }
      expect(
        challengeSessionReducer(sessionData, action)
      ).to.eql({
        challenges,
        enteredText: "",
        lastPressedKey: "",
        lastPressedKorChar: "",
        currentChallengeIndex: 0,
        challengeStartTime: new Date(),
        canRestart: true,
        correctEntry: false,
        noRemainingChallenges: false,
        challengeTimes: [],
        challengeContent: content,
        challengeTranslation: english
      })
    })

    it('advances index, identifies that more challenges remain', () => {
      const challenges = [{ dummy: "challenge" }, { content, english }, { dummy: 'ch' }]
      const sessionData = {
        challenges,
        enteredText,
        challengeContent,
        challengeTranslation,
        currentChallengeIndex: 0,
        noRemainingChallenges: false,
        correctEntry: false,
      }

      const action = { type: NEXT_CHALLENGE }

      expect(
        challengeSessionReducer(sessionData, action)
      ).to.eql({
        challenges,
        enteredText: "",
        lastPressedKey: "",
        lastPressedKorChar: "",
        currentChallengeIndex: 1,
        noRemainingChallenges: false,
        challengeStartTime: new Date(),
        correctEntry: false,
        challengeContent: content,
        challengeTranslation: english
      })
    })

    it('identifies there are no more challenges for next challenge', () => {
      const challenges = [{ dummy: "challenge" }, challenge]
      const sessionData = {
        challenges,
        currentChallengeIndex: 0,
        noRemainingChallenges: false,
      }

      const action = { type: NEXT_CHALLENGE }

      expect(
        challengeSessionReducer(sessionData, action)
      ).to.eql({
        challenges,
        enteredText: "",
        lastPressedKey: "",
        lastPressedKorChar: "",
        currentChallengeIndex: 1,
        noRemainingChallenges: true,
        challengeStartTime: new Date(),
        correctEntry: false,
        challengeContent: content,
        challengeTranslation: english
      })
    })
  })

  describe('handling keypress', () => {
    const enteredText = "cool text"
    const keyData = { enteredText, lastPressedKey, lastPressedKorChar }

    it('when the entry matches the challenge content', () => {
      const challengeContent = enteredText
      const action = {
        type: KEY_PRESS,
        keyData
      }
      const sessionData = {
        challengeContent,
        challengeTimes: [],
        challengeStartTime: new Date()
      }

      expect(
        challengeSessionReducer(sessionData, action)
      ).to.eql({
        correctEntry: true,
        challengeStartTime: new Date(),
        challengeTimes: [],
        lastPressedKey,
        lastPressedKorChar,
        enteredText,
        challengeContent
      })
    })

    it('when the entry does not match', () => {
      const challengeContent = "some challenge content"
      const action = {
        type: KEY_PRESS,
        keyData
      }
      const sessionData = {
        challengeContent,
        challengeTimes: [],
        challengeStartTime: new Date()
      }

      expect(
        challengeSessionReducer(sessionData, action)
      ).to.eql({
        correctEntry: false,
        challengeStartTime: new Date(),
        challengeTimes: [],
        lastPressedKey,
        lastPressedKorChar,
        enteredText,
        challengeContent
      })
    })
  })
})
