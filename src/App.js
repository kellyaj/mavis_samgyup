import React, { Component } from 'react'
import _ from 'lodash'
import Hangul from 'hangul-js'
import letters from './letters'
import ChallengeContent from './ChallengeContent'

class App extends Component {
  componentWillMount() {
    if(this.state === null) {
      this.setState({
        "currentChallengeIndex": 0,
        "enteredText": "",
        "currentChallengeContent": this.props.challenges[0]
      })
    }
  }

  allowedCharacter(key) {
    return _.includes([' ', '.', ',', '?', '(', ')', '!', '/'], key)
  }

  assembleHangul(charCollection) {
    return Hangul.assemble(charCollection)
  }

  handleKeyPress(e) {
    const korChar = letters[e.key]
    if(e.key == "Backspace") {
      this.setState({
        "enteredText": this.assembleHangul(this.state.enteredText.slice(0, -1))
      })
    } else if (this.allowedCharacter(e.key)) {
      this.setState({
        "enteredText": this.assembleHangul(this.state.enteredText += e.key)
      })
    } else if (korChar) {
      this.setState({
        "enteredText": this.assembleHangul(this.state.enteredText += korChar)
      })
    } else {
      // do nothing
    }
  }

  nextChallenge() {
    const newChallengeIndex = this.state.currentChallengeIndex += 1
    this.setState({
      currentChallengeIndex: newChallengeIndex,
      currentChallengeContent: this.props.challenges[newChallengeIndex],
      enteredText: ""
    })
    this.refs.challengeInput.value = ""
  }

  render() {
    return (
      <div className="app-container">
        <ChallengeContent
          challengeContent={this.state.currentChallengeContent}
          enteredText={this.state.enteredText}
          nextChallengeHandler={this.nextChallenge.bind(this)}
        />
        <h1>{ this.state.enteredText }</h1>
        <input type="text" onKeyDown={this.handleKeyPress.bind(this)} ref="challengeInput"/>
      </div>
    )
  }
}

module.exports = App
