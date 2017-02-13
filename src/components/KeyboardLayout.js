import React, { Component } from 'react'

class KeyboardLayout extends Component {

  displayLayout() {
    if(this.props.showKeyboard) {
      return (
        <div className="display-keyboard-container">
          <div className="keyboard-container" onClick={this.props.hideKeyboardHandler}>
            Hide Keyboard
            <div className="keyboard-image-container">
              <img src="https://s3.amazonaws.com/akells/KB_South_Korea.svg" />
            </div>
            <div className="image-credit">image by Yes0song (Own work) CC BY-SA 3.0</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="display-keyboard-container" onClick={this.props.toggleKeyboardHandler}>
          Show Keyboard
        </div>
      )
    }
  }

  render() {
    return (
      <div className="keyboard-layout-container">
        { this.displayLayout() }
      </div>
    )
  }
}

module.exports = KeyboardLayout
