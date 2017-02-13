import {
  SHOW_CHALLENGE_SELECTION,
  SELECT_CHALLENGE,
  TOGGLE_TRANSLATIONS,
  TOGGLE_KEYBOARD,
  TOGGLE_INPUT_FOCUSED,
} from '../actions/ActionTypes'

const uiDataReducer = (uiData = {}, action) => {
  switch(action.type) {
    case SHOW_CHALLENGE_SELECTION:
      return Object.assign({}, uiData, {
        showChallengeSelection: true
      })
    case SELECT_CHALLENGE:
      return Object.assign({}, uiData, {
        showChallengeSelection: false
      })
    case TOGGLE_TRANSLATIONS:
      const { showTranslation } = action
      return Object.assign({}, uiData, {
        showTranslation
      })
    case TOGGLE_INPUT_FOCUSED:
      const { isInputFocused } = action
      return Object.assign({}, uiData, {
        isInputFocused
      })
    case TOGGLE_KEYBOARD:
      return Object.assign({}, uiData, {
        showKeyboard: action.showKeyboard
      })
    default:
      return uiData
  }
}

export default uiDataReducer
