import React, { Component } from 'react'

class AppTitle extends Component {
  render() {
    return (
      <div className="app-title-container">
        <div className="app-main-title">
          <span className="app-logo">
            <img src="mavisfinalmini.png"></img>
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
