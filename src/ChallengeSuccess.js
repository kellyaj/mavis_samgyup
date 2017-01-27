import React, { Component } from 'react'

class ChallengeSuccess extends Component {

  componentDidMount() {
    this.props.correctEntryHandler()
  }

  nextChallengeContent() {
    return (
      <div className="next-challenge-container">
        Correct!
        Press [Enter] to go to the next challenge!
        <div className="" onClick={this.props.nextChallengeHandler}>-></div>
      </div>
    )
  }

  noRemainingChallengesContent() {
    return (
      <div className="no-challenges-container">
        <div onClick={this.props.startOverHandler}>No challenges remain. Start over?</div>
      </div>
    )
  }

  successContent() {
    if(this.props.noRemainingChallenges) {
      return this.noRemainingChallengesContent()
    } else {
      return this.nextChallengeContent()
    }
  }

  render() {
    return (
      <div className="challenge-success-container">
        { this.successContent() }
      </div>
    )
  }
}

module.exports = ChallengeSuccess
