import React, { Component } from 'react'

class NoticeArea extends Component {
  render() {
    return (
      <div className="notice-area-container">
        { this.props.message }
      </div>
    )
  }
}

module.exports = NoticeArea
