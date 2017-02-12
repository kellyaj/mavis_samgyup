import React, { Component } from 'react'

class ChallengeSelectionCard extends Component {
  selectCategory() {
    this.props.makeSelectionHandler(this.props.challengeCategory)
  }

  render() {
    const {
      categoryName,
      iconClass,
      difficulty,
      description
    } = this.props.challengeCategory
    return (
      <div className={`challenge-card-container difficulty-${difficulty}`} onClick={this.selectCategory.bind(this)}>
        <div className="challenge-card-title">
          { categoryName }
        </div>
        <div className="challenge-card-icon">
          <i className={`fa fa-${iconClass}`}></i>
        </div>
      </div>
    )
  }
}

module.exports = ChallengeSelectionCard
