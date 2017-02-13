import {
  SHOW_CHALLENGE_SELECTION,
  SELECT_CHALLENGE,
  RESTART_CHALLENGE,
  TOGGLE_TRANSLATIONS,
  NEXT_CHALLENGE,
  TOGGLE_KEYBOARD,
  CORRECT_ENTRY,
  KEY_PRESS,
} from './ActionTypes'

class ActionCreators {
  showChallengeSelection() {
    return { type: SHOW_CHALLENGE_SELECTION }
  }

  selectChallenge(challengeCategory) {
    return {
      type: SELECT_CHALLENGE,
      challengeCategory
    }
  }

  keyPress(keyData) {
    return {
      type: KEY_PRESS,
      keyData
    }
  }

  toggleTranslations(showTranslation) {
    return {
      type: TOGGLE_TRANSLATIONS,
      showTranslation
    }
  }

  toggleKeyboard(showKeyboard) {
    return {
      type: TOGGLE_KEYBOARD,
      showKeyboard
    }
  }

  restartChallenge() {
    return { type: RESTART_CHALLENGE }
  }

  nextChallenge() {
    return { type: NEXT_CHALLENGE }
  }

  correctEntry() {
    return { type: CORRECT_ENTRY }
  }
}

module.exports = new ActionCreators()
