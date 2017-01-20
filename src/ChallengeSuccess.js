import React, { Component } from 'react'

class ChallengeSuccess extends Component {

  render() {
    return (
      <div className="challenge-success-container">
        <h2>Correct!</h2>
        <div className="" onClick={this.props.nextChallengeHandler}>-> next challenge</div>
      </div>
    )
  }
}

module.exports = ChallengeSuccess
