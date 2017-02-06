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

  displayTranslation() {
    const { challengeTranslation } = this.props
    if(this.props.showTranslation) {
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
      challengeTranslation
    } = this.props
    const statusClass = this.determineStatusClass()
    return (
      <div className="challenge-content-container">
        <div className="challenge-content-feedback">{ this.determineFeedback() }</div>
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
