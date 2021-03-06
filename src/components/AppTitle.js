import React, { Component } from 'react'

class AppTitle extends Component {
  render() {
    return (
      <div className="app-title-container" onClick={this.props.selectNewChallengeHandler}>
        <div className="app-main-title">
          <span className="app-logo">
            <img src="mavis_sep_mini9.png"></img>
          </span>
          <span className="app-primary-title">
            Mavis Samgyeop
          </span>
          <span className="app-sub-title">
            &nbsp;at&nbsp;&nbsp;korkb.com
          </span>
        </div>
      </div>
    )
  }
}

module.exports = AppTitle
