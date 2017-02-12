import React, { Component } from 'react'
import ChallengeTimeCard from './ChallengeTimeCard'

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

  buildTimeCard(time, idx) {
    return (
      <ChallengeTimeCard
        key={idx}
        time={time}
      />
    )
  }

  displayChallengeTimes() {
    const timeCards = _.map(this.props.challengeTimes, this.buildTimeCard.bind(this))
    return (
      <div className="challenge-time-card-list">
        { timeCards }
      </div>
    )
  }

  noRemainingChallengesContent() {
    return (
      <div className="no-challenges-container">
        <div className="success-challenge-time-container">
          Challenge Times:
          { this.displayChallengeTimes() }
        </div>
        <div onClick={this.props.startOverHandler}>No challenges remain. Click here to start this challenge over.</div>
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
