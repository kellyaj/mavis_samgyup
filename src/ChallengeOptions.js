import React, { Component } from 'react'

class ChallengeOptions extends Component {
  render() {
    return (
      <div className="challenge-options-container">
        <ul>
          <li onClick={this.props.startOverHandler}>Restart</li>
        </ul>
      </div>
    )
  }
}

module.exports = ChallengeOptions
