import {
  SELECT_CHALLENGE,
  TOGGLE_TRANSLATIONS,
  TOGGLE_KEYBOARD,
} from '../actions/ActionTypes'

const uiDataReducer = (uiData = {}, action) => {
  switch(action.type) {
    case SELECT_CHALLENGE:
      return Object.assign({}, uiData, {
        showChallengeSelection: false
      })
    case TOGGLE_TRANSLATIONS:
      return Object.assign({}, uiData, {
        showTranslations: action.showTranslations
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
