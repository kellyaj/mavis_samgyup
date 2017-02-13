import { expect } from 'chai'
import challengesReducer from '../../src/reducers/challengesReducer'

describe('challengesReducer', () => {
  it('returns the challenges', () => {
    const challengesData = { someChallenges: "goHere" }
    const action = { type: "SOME_ACTION_TYPE" }
    expect(
      challengesReducer(challengesData, action)
    ).to.eql(challengesData)
  })
})
