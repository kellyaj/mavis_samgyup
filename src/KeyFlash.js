import React, { Component } from 'react'

class KeyFlash extends Component {

  presentLastKeys() {
    if(this.props.lastPressedKey) {
      return `${this.props.lastPressedKorChar} ( ${this.props.lastPressedKey} )`
    }
  }

  render() {
    // animate this to flash then fade away and disappear
    return (
      <div className="keyflash-container">
        { this.presentLastKeys() }
      </div>
    )
  }
}

module.exports = KeyFlash
