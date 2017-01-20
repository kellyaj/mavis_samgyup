import React, { Component } from 'react'
import ChallengeSuccess from './ChallengeSuccess'

class ChallengeContent extends Component {

  determineFeedback() {
    if(this.props.enteredText === this.props.challengeContent) {
      return (
        <ChallengeSuccess
          nextChallengeHandler={this.props.nextChallengeHandler}
          startOverHandler={this.props.startOverHandler}
          noRemainingChallenges={this.props.noRemainingChallenges}
        />
      )
    } else {
      return  ""
    }
  }

  render() {
    const { challengeContent } = this.props
    return (
      <div className="challenge-content-container">
        <div className="challenge-content-feedback">{ this.determineFeedback() }</div>
        <div className="challenge-content">{ challengeContent }</div>
      </div>
    )
  }
}

module.exports = ChallengeContent
