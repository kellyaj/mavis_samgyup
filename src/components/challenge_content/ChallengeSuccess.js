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
    const challenge = this.props.challenges[idx]
    return (
      <ChallengeTimeCard
        key={idx}
        time={time}
        challenge={challenge}
      />
    )
  }

  displayChallengeTimes() {
    const timeCards = _.map(this.props.challengeTimes, this.buildTimeCard.bind(this))
    return (
      <div>
        { timeCards }
      </div>
    )
  }

  displayTotalTime() {
    const { overallChallengeStartTime } = this.props
    const finishTime = new Date()
    return (finishTime.getTime() - overallChallengeStartTime.getTime()) / 1000
  }

  noRemainingChallengesContent() {
    return (
      <div className="no-challenges-container">
        <span className="challenge-total-time">Total Time: { this.displayTotalTime() }</span>
        <div className="success-challenge-time-container">
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
