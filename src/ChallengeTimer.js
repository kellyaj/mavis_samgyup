import React, { Component } from 'react'

class ChallengeTimer extends Component {

  componentWillMount() {
    if(this.state === null) {
      this.setState({ currentTime: 0 })
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const newTime = this.state.currentTime += 1
      this.setState({ currentTime: newTime })
    }, 1000)
  }

  componentDidUpdate() {
    setTimeout(() => {
      const newTime = this.state.currentTime += 1
      this.setState({ currentTime: newTime })
    }, 1000)
  }

  displayTime() {
    return this.state.currentTime ? this.state.currentTime : "0"
  }

  render() {
    return (
      <div className="timer-container">
        <div className="time">
          { this.displayTime() }
        </div>
      </div>
    )
  }
}

module.exports = ChallengeTimer
