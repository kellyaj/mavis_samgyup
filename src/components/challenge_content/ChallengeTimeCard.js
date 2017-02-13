import React, { Component } from 'react'

class ChallengeTimeCard extends Component {

  performanceClass() {
    const { time } = this.props
    if(time < 6) {
      return "challenge-good"
    } else if(time < 11) {
      return "challenge-ok"
    } else {
      return "challenge-bad"
    }
  }

  render() {
    const { content } = this.props.challenge
    const { time } = this.props
    return (
      <div className={`challenge-time-card-container ${this.performanceClass()}`}>
        <div className="challenge-content-mini">
          { content }
        </div>
        <div className="challenge-time-icon">
          <i className="fa fa-clock-o"></i>
        </div>
        <div className="challenge-time-card-title">
          { time }sec
        </div>
      </div>
    )
  }
}

module.exports = ChallengeTimeCard
