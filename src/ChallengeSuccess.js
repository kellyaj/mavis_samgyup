import React, { Component } from 'react'

class ChallengeSuccess extends Component {

  componentDidMount() {
    this.props.correctEntryHandler()
  }

  nextChallengeContent() {
    return (
      <div className="next-challenge-container" onClick={this.props.nextChallengeHandler}>
        Correct!
        Press [Enter] to go to the next challenge!
        <i className="fa fa-arrow-right"></i>
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
