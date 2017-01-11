import React, { Component } from 'react'
import letters from './letters'

class App extends Component {
  handleKeyPress(e) {
    const korChar = letters[e.charCode]
    if(korChar == "ㅃ") {
      console.log("Match!")
    }
  }

  render() {
    return (
      <div className="app-container">
        <h1>ㅃ</h1>
        Press the correct key
        <input type="text" onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}

module.exports = App
