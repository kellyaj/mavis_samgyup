import React, { Component } from 'react'

class ChallengeOptions extends Component {
  displayRestart() {
    if(this.props.canRestart) {
      return (
        <li className="challenge-options-item" onClick={this.props.startOverHandler}>Restart</li>
      )
    }
  }

  displayToggleTranslation() {
    if(this.props.canRestart) {
      return (
        <li className="challenge-options-item" onClick={this.props.toggleTranslationsHandler}>Toggle Translations</li>
      )
    }
  }

  render() {
    return (
      <div className="challenge-options-container">
        <ul>
          <li className="challenge-options-item" onClick={this.props.selectNewChallengeHandler}>Select New Challenge</li>
          <li className="challenge-options-item" onClick={() => {}}>Help</li>
          { this.displayRestart() }
          { this.displayToggleTranslation() }
        </ul>
      </div>
    )
  }
}

module.exports = ChallengeOptions
