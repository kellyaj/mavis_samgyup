import React, { Component } from 'react'
import ChallengeSelectionCard from './ChallengeSelectionCard'
import _ from 'lodash'

class ChallengeSelection extends Component {

  buildChallengeCard(challengeCategory, idx) {
    return (
      <ChallengeSelectionCard
        key={idx}
        challengeCategory={challengeCategory}
        makeSelectionHandler={this.props.makeSelectionHandler}
      />
    )
  }

  buildChallengeList() {
    const { challenges } = this.props
    const challengeSelectionCards = _.map(challenges, this.buildChallengeCard.bind(this))
    return (
      <div className="challenge-selection-list">
        { challengeSelectionCards }
      </div>
    )
  }

  render() {
    return (
      <div className="challenge-selection-container">
        <div className="challenge-selection-title">
          Start improving your Korean typing skills and vocabulary by selecting from one of these categories
        </div>
        { this.buildChallengeList() }
      </div>
    )
  }
}

module.exports = ChallengeSelection
