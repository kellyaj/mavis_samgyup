import { connect } from 'react-redux'
import Application from '../components/Application'

const mapStateToProps = (state) => {
  return {
    uiData: state.uiDataReducer,
    challenges: state.challengesReducer,
    challengeSession: state.challengeSessionReducer,
    currentChallengeCategory: state.currentChallengeCategoryReducer,
  }
}

const App = connect(mapStateToProps)(Application)

export default App
