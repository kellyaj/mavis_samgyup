import React, { Component } from 'react'

class ChallengeOptions extends Component {
  render() {
    return (
      <div className="challenge-options-container">
        <ul>
          <li className="challenge-options-item" onClick={this.props.startOverHandler}>Restart</li>
          <li className="challenge-options-item" onClick={this.props.selectNewChallengeHandler}>Select New Challenge</li>
          <li className="challenge-options-item" onClick={() => {}}>Help</li>
        </ul>
      </div>
    )
  }
}

module.exports = ChallengeOptions
