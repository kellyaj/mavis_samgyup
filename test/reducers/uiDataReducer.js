import { expect } from 'chai'
import uiDataReducer from '../../src/reducers/uiDataReducer'
import {
  SHOW_CHALLENGE_SELECTION,
  SELECT_CHALLENGE,
  TOGGLE_TRANSLATIONS,
  TOGGLE_KEYBOARD,
} from '../../src/actions/ActionTypes'

describe('uiDataReducer', () => {
  it('shows the challenge selection', () => {
    const uiData = { showChallengeSelection: false }
    const action = { type: SHOW_CHALLENGE_SELECTION }
    expect(
      uiDataReducer(uiData, action)
    ).to.eql({ showChallengeSelection: true })
  })

  it('hides the challenge selection when a challenge is selected', () => {
    const uiData = { showChallengeSelection: true }
    const action = { type: SELECT_CHALLENGE }
    expect(
      uiDataReducer(uiData, action)
    ).to.eql({ showChallengeSelection: false })
  })

  it('toggles translation with the action value', () => {
    const uiData = { showTranslation: true }
    const action = { type: TOGGLE_TRANSLATIONS, showTranslation: false }
    expect(
      uiDataReducer(uiData, action)
    ).to.eql({ showTranslation: false })
  })

  it('toggles the keyboard image with the action value', () => {
    const uiData = { showKeyboard: false }
    const action = { type: TOGGLE_KEYBOARD, showKeyboard: true }
    expect(
      uiDataReducer(uiData, action)
    ).to.eql({ showKeyboard: true })
  })
})
