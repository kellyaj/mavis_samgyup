import challenges from './challenges'

const InitialState = {
  uiDataReducer: {
    showChallengeSelection: true,
    showKeyboard: false,
    showTranslation: true,
    noticeMessage: "",
  },
  challengesReducer: challenges,
  currentChallengeCategoryReducer: {},
  challengeSessionReducer: {
    enteredText: "",
    currentChallengeIndex: 0,
    correctEntry: false,
    canRestart: false,
    challengeStartTime: undefined,
    challengeTimes: [],
    noRemainingChallenges: false,
    challenges: []
  },
}

export default InitialState
