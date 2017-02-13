import React, { Component } from 'react'
import Hangul from 'hangul-js'
import Store from '../store/Store'
import ActionCreators from '../actions/ActionCreators'
import AppTitle from './AppTitle'
import ChallengeContent from './challenge_content/ChallengeContent'
import ChallengeOptions from './ChallengeOptions'
import KeyboardLayout from './KeyboardLayout'
import KeyFlash from './KeyFlash'
import NoticeArea from './NoticeArea'
import ChallengeSelection from './challenge_selection/ChallengeSelection'
import TypeHereTip from './tips/TypeHereTip'
import letters from '../letters'

class Application extends Component {

  componentDidUpdate() {
    const { showChallengeSelection } = this.props.uiData
    if(!showChallengeSelection) {
      this.refs.challengeInput.focus()
    }
  }

  selectNewChallenge() {
    return Store.dispatch(ActionCreators.showChallengeSelection())
  }

  makeChallengeSelection(challengeCategory) {
    return Store.dispatch(ActionCreators.selectChallenge(challengeCategory))
  }

  toggleTranslations() {
    const { showTranslation } = this.props.uiData
    return Store.dispatch(ActionCreators.toggleTranslations(!showTranslation))
  }

  startOver() {
    return Store.dispatch(ActionCreators.restartChallenge())
  }

  nextChallenge() {
    return Store.dispatch(ActionCreators.nextChallenge())
  }

  toggleKeyboard() {
    const { showKeyboard } = this.props.uiData
    return Store.dispatch(ActionCreators.toggleKeyboard(!showKeyboard))
  }

  correctEntry() {
    return Store.dispatch(ActionCreators.correctEntry)
  }

  bumpKeepTrying() {
    // do some cool thing to bump the keep trying message
    // or otherwise indicate it isnt done yet
  }

  allowedCharacter(key) {
    return _.includes([' ', '.', ',', '?', '(', ')', '!', '/'], key)
  }

  assembleHangul(charCollection) {
    return Hangul.assemble(charCollection)
  }

  handleInputFocusChange() {
    // locking into input focus loop because of state change and rendering
    // when used with onBLur and onFocus
    const { inputIsFocused } = this.props.uiData
    return Store.dispatch(ActionCreators.toggleRefocusInputTip(!inputIsFocused))
  }

  handleKeyPress(e) {
    const korChar = letters[e.key]
    const {
      noRemainingChallenges,
      correctEntry,
    } = this.props.challengeSession
    let { enteredText } = this.props.challengeSession
    if(e.key == "Backspace" && !correctEntry) {
      return Store.dispatch(ActionCreators.keyPress({
        enteredText: this.assembleHangul(enteredText.slice(0, -1)),
        lastPressedKey: e.key,
        lastPressedKorChar: korChar
      }))
    } else if (e.key == "Enter") {
      if(!noRemainingChallenges) {
        if(correctEntry) {
          this.refs.challengeInput.value = ""
          return this.nextChallenge()
        } else {
          // bump keep trying
        }
      }
    } else if (this.allowedCharacter(e.key) && !correctEntry) {
      return Store.dispatch(ActionCreators.keyPress({
        enteredText: this.assembleHangul(enteredText += e.key),
        lastPressedKey: e.key,
        lastPressedKorChar: korChar
      }))
    } else if (korChar && !correctEntry) {
      return Store.dispatch(ActionCreators.keyPress({
        enteredText: this.assembleHangul(enteredText += korChar),
        lastPressedKey: e.key,
        lastPressedKorChar: korChar
      }))
    } else {
      // do nothing
    }
  }

  displayTypingTip() {
    const { showKeyboard } = this.props.uiData
    if(!showKeyboard) {
      return (
        <TypeHereTip />
      )
    }
  }

  displayMainContent() {
    // probably time to split this into some components, maybe consider future challenge types/journeys
    const { showChallengeSelection } = this.props.uiData
    const { challenges } = this.props
    if(showChallengeSelection) {
      return (
        <div className="challenge-selection-container">
          <ChallengeSelection
            challenges={challenges}
            makeSelectionHandler={this.makeChallengeSelection.bind(this)}
          />
        </div>
      )
    } else {
      const {
        showKeyboard,
        showTranslation
      } = this.props.uiData
      const {
        enteredText,
        lastPressedKey,
        lastPressedKorChar,
      } = this.props.challengeSession
      const { categoryName } = this.props.currentChallengeCategory
      return (
        <div>
          <ChallengeContent
            challengeSession={this.props.challengeSession}
            uiData={this.props.uiData}
            challengeCategoryName={categoryName}
            showTranslation={showTranslation}
            nextChallengeHandler={this.nextChallenge.bind(this)}
            startOverHandler={this.startOver.bind(this)}
            correctEntryHandler={this.correctEntry.bind(this)}
          />
          <div className="entered-text-container">{ enteredText }</div>
          <div className="input-console">
            <div className="input-side-menu">
              <KeyboardLayout
                showKeyboard={showKeyboard}
                toggleKeyboardHandler={this.toggleKeyboard.bind(this)}
              />
              { this.displayTypingTip() }
            </div>
          </div>
          <div className="challenge-input-container">
            <input type="text" onKeyDown={this.handleKeyPress.bind(this)} ref="challengeInput" autoComplete="off"/>
          </div>
          <div className="input-side-menu">
            <KeyFlash
              lastPressedKey={lastPressedKey}
              lastPressedKorChar={lastPressedKorChar}
            />
          </div>
        </div>
      )
    }
  }

  render() {
    const { showChallengeSelection, noticeMessage, isInputFocused } = this.props.uiData
    const { canRestart } = this.props.challengeSession
    return (
      <div className="app-container">
        <AppTitle
          inChallengeSelection={showChallengeSelection}
          selectNewChallengeHandler={this.selectNewChallenge.bind(this)}
          showRefocusTip={isInputFocused}
        />
        <ChallengeOptions
          startOverHandler={this.startOver.bind(this)}
          selectNewChallengeHandler={this.selectNewChallenge.bind(this)}
          toggleTranslationsHandler={this.toggleTranslations.bind(this)}
          canRestart={canRestart}
        />
        <NoticeArea
          message={noticeMessage}
        />
        { this.displayMainContent() }
      </div>
    )
  }
}

export default Application
