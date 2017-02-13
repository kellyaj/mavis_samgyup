import React, { Component } from 'react'
import ChallengeSuccess from './ChallengeSuccess'
import ChallengeInProgress from './ChallengeInProgress'

class ChallengeContent extends Component {
  componentWillMount() {
    this.setState({ challengeBeginning: true })
  }

  componentDidUpdate() {
    if(this.state.challengeBeginning) {
      this.setState({ challengeBeginning: false })
    }
  }

  determineFeedback() {
    const {
      enteredText,
      challengeContent,
      noRemainingChallenges,
      challengesTimes,
    } = this.props.challengeSession
    if(enteredText === challengeContent) {
      return (
        <ChallengeSuccess
          noRemainingChallenges={noRemainingChallenges}
          challengeTimes={challengeTimes}
          nextChallengeHandler={this.props.nextChallengeHandler}
          startOverHandler={this.props.startOverHandler}
          correctEntryHandler={this.props.correctEntryHandler}
        />
      )
    } else if(this.state.challengeBeginning) {
      // put this into a component
      return (
        <div className="challenge-in-progress">
          Challenge started! Start typing the correct keys!
        </div>
      )
    } else {
      return (
        <ChallengeInProgress />
      )
    }
  }

  determineStatusClass() {
    const { correctEntry } = this.props.challengeSession
    if(correctEntry) {
      return "entry-success"
    } else {
      return "entry-not-success"
    }
  }

  displayTranslation() {
    const { challengeTranslation } = this.props.challengeSession
    const { showTranslation } = this.props.uiData
    if(showTranslation) {
      return (
        <div className={`challenge-translation`}>
          ( { challengeTranslation } )
        </div>
      )
    }
  }

  render() {
    const {
      challengeContent,
      challengeTranslation,
      challengeCategoryName
    } = this.props.challengeSession
    const statusClass = this.determineStatusClass()
    return (
      <div className="challenge-content-container">
        <div className="challenge-category-name">{challengeCategoryName}</div>
        <div className="challenge-content-feedback">
          <div className="feedback-container">
            { this.determineFeedback() }
          </div>
        </div>
        <div className={`challenge-content ${statusClass}`}>
          <div className="">
            { challengeContent }
          </div>
          { this.displayTranslation() }
        </div>
      </div>
    )
  }
}

module.exports = ChallengeContent
