import { connect } from 'react-redux'
import Application from '../components/Application'

const mapStateToProps = (state) => {
  return {
    uiData: state.uiDataReducer,
    challenges: state.challengesReducer,
    currentChallenge: state.currentChallengeReducer
  }
}

const App = connect(mapStateToProps)(Application)

export default App
