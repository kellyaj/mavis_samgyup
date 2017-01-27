import React, { Component } from 'react'
import _ from 'lodash'
import Hangul from 'hangul-js'
import letters from './letters'
import ChallengeContent from './ChallengeContent'
import ChallengeOptions from './ChallengeOptions'
import NoticeArea from './NoticeArea'
import KeyFlash from './KeyFlash'

class App extends Component {
  componentWillMount() {
    if(this.state === null) {
      this.setState({
        currentChallengeIndex: 0,
        noRemainingChallenges: false,
        enteredText: "",
        currentChallengeContent: this.props.challenges[0],
        noticeMessage: "",
      })
    }
  }

  componentDidMount() {
    this.refs.challengeInput.focus()
  }

  allowedCharacter(key) {
    return _.includes([' ', '.', ',', '?', '(', ')', '!', '/'], key)
  }

  assembleHangul(charCollection) {
    return Hangul.assemble(charCollection)
  }

  bumpKeepTrying() {
    // do some cool thing to bump the keep trying message
    // or otherwise indicate it isnt done yet
  }

  handleKeyPress(e) {
    const korChar = letters[e.key]
    console.log(this.state.noRemainingChallenges)
    if(e.key == "Backspace") {
      this.setState({
        enteredText: this.assembleHangul(this.state.enteredText.slice(0, -1)),
        lastPressedKey: e.key,
        lastPressedKorChar: korChar
      })
    } else if (e.key == "Enter") {
      if(!this.state.noRemainingChallenges) {
        this.state.correctEntry ? this.nextChallenge() : this.bumpKeepTrying()
      }
    } else if (this.allowedCharacter(e.key)) {
      this.setState({
        enteredText: this.assembleHangul(this.state.enteredText += e.key),
        lastPressedKey: e.key,
        lastPressedKorChar: korChar
      })
    } else if (korChar) {
      this.setState({
        enteredText: this.assembleHangul(this.state.enteredText += korChar),
        lastPressedKey: e.key,
        lastPressedKorChar: korChar
      })
    } else {
      // do nothing
    }
  }

  nextChallenge() {
    this.refs.challengeInput.value = ""
    const newChallengeIndex = this.state.currentChallengeIndex += 1
    const noChallenges = newChallengeIndex === (this.props.challenges.length - 1)
    this.setState({
      currentChallengeIndex: newChallengeIndex,
      currentChallengeContent: this.props.challenges[newChallengeIndex],
      enteredText: "",
      noRemainingChallenges: noChallenges,
      correctEntry: false
    })
    this.refs.challengeInput.focus()
  }

  startOver() {
    this.refs.challengeInput.value = ""
    this.setState({
      noticeMessage: "Restarting with the first challenge",
      currentChallengeIndex: "",
      enteredText: "",
      currentChallengeContent: this.props.challenges[0],
      noRemainingChallanges: false,
      correctEntry: false
    })
  }

  correctEntry() {
    this.setState({ correctEntry: true })
  }

  render() {
    return (
      <div className="app-container">
        <NoticeArea
          message={this.state.noticeMessage}
        />
        <ChallengeOptions
          startOverHandler={this.startOver.bind(this)}
        />
        <ChallengeContent
          challengeContent={this.state.currentChallengeContent}
          enteredText={this.state.enteredText}
          noRemainingChallenges={this.state.noRemainingChallenges}
          nextChallengeHandler={this.nextChallenge.bind(this)}
          startOverHandler={this.startOver.bind(this)}
          correctEntryHandler={this.correctEntry.bind(this)}
          correctEntry={this.state.correctEntry}
        />
        <div className="entered-text-container">{ this.state.enteredText }</div>
        <div className="challenge-input-container">
          <input type="text" onKeyDown={this.handleKeyPress.bind(this)} ref="challengeInput"/>
        </div>
        <KeyFlash
          lastPressedKey={this.state.lastPressedKey}
          lastPressedKorChar={this.state.lastPressedKorChar}
        />
      </div>
    )
  }
}

module.exports = App
