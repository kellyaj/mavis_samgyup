import { combineReducers } from 'redux'

import uiDataReducer from './uiDataReducer'
import challengesReducer from './challengesReducer'
import challengeSessionReducer from './challengeSessionReducer'
import currentChallengeCategoryReducer from './currentChallengeCategoryReducer'

const rootReducer = combineReducers({
  uiDataReducer,
  challengesReducer,
  currentChallengeCategoryReducer,
  challengeSessionReducer,
})

export default rootReducer
