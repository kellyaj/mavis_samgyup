import React, { Component } from 'react'
import _ from 'lodash'
import Hangul from 'hangul-js'
import letters from './letters'
import ChallengeContent from './ChallengeContent'
import ChallengeOptions from './ChallengeOptions'
import NoticeArea from './NoticeArea'
import KeyFlash from './KeyFlash'
import KeyboardLayout from './KeyboardLayout'
import ChallengeSelection from './challenge_selection/ChallengeSelection'

class App extends Component {
  componentWillMount() {
    if(this.state === null) {
      this.setState({
        currentChallengeIndex: 0,
        noRemainingChallenges: false,
        enteredText: "",
        currentChallengeContent: undefined,
        currentChallengeTranslation: undefined,
        noticeMessage: "",
        showKeyboard: false,
        showChallengeSelection: true,
        currentChallengeCategory: undefined,
        canRestart: false,
        showTranslation: true,
      })
    }
  }

  componentDidUpdate() {
    if(!this.state.showChallengeSelection) {
      this.refs.challengeInput.focus()
    }
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
    const noChallenges = newChallengeIndex === (this.state.currentChallengeCategory.challenges.length - 1)
    this.setState({
      currentChallengeIndex: newChallengeIndex,
      currentChallengeContent: this.state.currentChallengeCategory.challenges[newChallengeIndex].content,
      currentChallengeTranslation: this.state.currentChallengeCategory.challenges[newChallengeIndex].english,
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
      currentChallengeIndex: 0,
      enteredText: "",
      currentChallengeContent: this.state.currentChallengeCategory.challenges[0].content,
      currentChallengeTranslation: this.state.currentChallengeCategory.challenges[0].english,
      noRemainingChallanges: false,
      correctEntry: false,
      canRestart: true,
    })
  }

  correctEntry() {
    this.setState({ correctEntry: true })
  }

  showKeyboard() {
    this.setState({ showKeyboard: true })
  }

  hideKeyboard() {
    this.setState({ showKeyboard: false })
  }

  selectNewChallenge() {
    this.setState({
      showChallengeSelection: true,
      currentChallengeCategory: undefined,
      currentChallengeContent: undefined,
      currentChallengeTranslation: undefined,
      currentChallengeIndex: 0,
      canRestart: false,
    })
  }

  makeChallengeSelection(challengeCategory) {
    this.setState({
      showChallengeSelection: false,
      currentChallengeCategory: challengeCategory,
      currentChallengeContent: challengeCategory.challenges[0].content,
      currentChallengeTranslation: challengeCategory.challenges[0].english,
      canRestart: true,
    })
  }

  toggleTranslations() {
    const currentTranslationState = this.state.showTranslation
    this.setState({ showTranslation: !currentTranslationState})
  }

  displayMainContent() {
    if(this.state.showChallengeSelection) {
      return (
        <div className="challenge-selection-container">
          <ChallengeSelection
            challenges={this.props.challenges}
            makeSelectionHandler={this.makeChallengeSelection.bind(this)}
          />
        </div>
      )
    } else {
      return (
        <div>
          <ChallengeContent
            challengeContent={this.state.currentChallengeContent}
            challengeTranslation={this.state.currentChallengeTranslation}
            challengeCategoryName={this.state.currentChallengeCategory.categoryName}
            showTranslation={this.state.showTranslation}
            enteredText={this.state.enteredText}
            noRemainingChallenges={this.state.noRemainingChallenges}
            nextChallengeHandler={this.nextChallenge.bind(this)}
            startOverHandler={this.startOver.bind(this)}
            correctEntryHandler={this.correctEntry.bind(this)}
            correctEntry={this.state.correctEntry}
          />
          <div className="entered-text-container">{ this.state.enteredText }</div>
          <div className="challenge-input-container">
            <input type="text" onKeyDown={this.handleKeyPress.bind(this)} ref="challengeInput" autoComplete="off"/>
          </div>
          <KeyFlash
            lastPressedKey={this.state.lastPressedKey}
            lastPressedKorChar={this.state.lastPressedKorChar}
          />
          <KeyboardLayout
            showKeyboard={this.state.showKeyboard}
            showKeyboardHandler={this.showKeyboard.bind(this)}
            hideKeyboardHandler={this.hideKeyboard.bind(this)}
          />
        </div>
      )
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="app-title-container">
          <div className="app-main-title">
            <span className="app-logo"><img src="mavisfinal.png"></img></span>Mavis Samgyeop <span className="app-sub-title">&nbsp;at&nbsp;&nbsp;korkb.com</span>
          </div>
        </div>
        <ChallengeOptions
          startOverHandler={this.startOver.bind(this)}
          selectNewChallengeHandler={this.selectNewChallenge.bind(this)}
          toggleTranslationsHandler={this.toggleTranslations.bind(this)}
          canRestart={this.state.canRestart}
        />
        <NoticeArea
          message={this.state.noticeMessage}
        />
        { this.displayMainContent() }
      </div>
    )
  }
}

module.exports = App
