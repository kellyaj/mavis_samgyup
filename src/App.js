import React, { Component } from 'react'
import _ from 'lodash'
import Hangul from 'hangul-js'
import letters from './letters'

class App extends Component {
  componentWillMount() {
    if(this.state === null) {
      this.setState({
        "enteredText": ""
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

  render() {
    return (
      <div className="app-container">
        <h1>바나나</h1>
        <h1>{ this.state.enteredText }</h1>
        <input type="text" onKeyDown={this.handleKeyPress.bind(this)} />
      </div>
    )
  }
}

module.exports = App
