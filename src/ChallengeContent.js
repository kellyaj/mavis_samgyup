import React, { Component } from 'react'
import ChallengeSuccess from './ChallengeSuccess'
import ChallengeInProgress from './ChallengeInProgress'

class ChallengeContent extends Component {

  determineFeedback() {
    if(this.props.enteredText === this.props.challengeContent) {
      return (
        <div className="feedback-container">
          <ChallengeSuccess
            nextChallengeHandler={this.props.nextChallengeHandler}
            startOverHandler={this.props.startOverHandler}
            noRemainingChallenges={this.props.noRemainingChallenges}
            correctEntryHandler={this.props.correctEntryHandler}
          />
        </div>
      )
    } else {
      return (
        <div className="feedback-container">
          <ChallengeInProgress
          />
        </div>
      )
    }
  }

  determineStatusClass() {
    if(this.props.correctEntry) {
      return "entry-success"
    } else {
      return "entry-not-success"
    }
  }

  render() {
    const { challengeContent } = this.props
    const statusClass = this.determineStatusClass()
    return (
      <div className="challenge-content-container">
        <div className="challenge-content-feedback">{ this.determineFeedback() }</div>
        <div className={`challenge-content ${statusClass}`}>{ challengeContent }</div>
      </div>
    )
  }
}

module.exports = ChallengeContent
