import React, { Component } from 'react'

class App extends Component {
  handleKeyPress(e) {
    console.log(e.key)
  }

  render() {
    return (
      <div className="app-container">
        Press the key
        <input type="text" onKeyPress={this.handleKeyPress} />
      </div>
    )
  }
}

module.exports = App
