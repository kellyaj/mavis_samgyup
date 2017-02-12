import {
  RESTART_CHALLENGE,
  SELECT_CHALLENGE,
  TOGGLE_TRANSLATIONS,
  NEXT_CHALLENGE,
  TOGGLE_KEYBOARD,
  CORRECT_ENTRY,
  KEY_PRESS,
} from './ActionTypes'

class ActionCreators {
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

  toggleTranslations(showTranslations) {
    return {
      type: TOGGLE_TRANSLATIONS,
      showTranslations
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
