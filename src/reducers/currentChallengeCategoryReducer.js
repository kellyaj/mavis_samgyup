import {
  SHOW_CHALLENGE_SELECTION,
  SELECT_CHALLENGE,
} from '../actions/ActionTypes'

const currentChallengeCategoryReducer = (currentChallengeCategory = {}, action) => {
  switch(action.type) {
    case SHOW_CHALLENGE_SELECTION:
      return {}
    case SELECT_CHALLENGE:
      return Object.assign({}, currentChallengeCategory, action.challengeCategory)
    default:
      return currentChallengeCategory
  }
}

export default currentChallengeCategoryReducer
