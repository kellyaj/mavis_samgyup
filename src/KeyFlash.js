import React, { Component } from 'react'

class KeyFlash extends Component {

  presentLastKeys() {
    if(this.props.lastPressedKey == 'Backspace') {
      return `Backspace`
    } else if(this.props.lastPressedKey) {
      return `${this.props.lastPressedKorChar} ( ${this.props.lastPressedKey} )`
    }
  }

  presentKeyNote() {
    if(this.props.lastPressedKey == 'Backspace') {
      return (
        <div className="key-note-container">
          NOTE: Backspace will remove an entire Korean character, which may be composed of multiple characters that have been merged. This results in extra english characters in the above input. When in doubt, clear it out.
        </div>
      )
    }
  }

  render() {
    // animate this to flash then fade away and disappear
    return (
      <div className="keyflash-container">
        { this.presentLastKeys() }
        { this.presentKeyNote()}
      </div>
    )
  }
}

module.exports = KeyFlash
