import { expect } from 'chai'
import currentChallengeCategoryReducer from '../../src/reducers/currentChallengeCategoryReducer'
import {
  SHOW_CHALLENGE_SELECTION,
  SELECT_CHALLENGE,
} from '../../src/actions/ActionTypes'

describe('currentChallengeCategoryReducer', () => {
  it('clears any existing challenge when the challenge selection is shown', () => {
    const challengeCategoryData = { something: "value"  }
    const action = { type: SHOW_CHALLENGE_SELECTION }
    expect(
      currentChallengeCategoryReducer(challengeCategoryData, action)
    ).to.eql({})
  })

  it('assigns a selected challenge category', () => {
    const category = { some: "category" }
    const challengeCategoryData = { }
    const action = { type: SELECT_CHALLENGE, challengeCategory: category }
    expect(
      currentChallengeCategoryReducer(challengeCategoryData, action)
    ).to.eql(category)
  })
})
