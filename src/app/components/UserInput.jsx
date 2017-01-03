import React from 'react'

import InputForm from './InputForm'
import Button from './common/Button'

const styles = {
  'Input': {
    width: '98%',
    height: '6%',
    marginLeft: '20px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}

function HelpButton ({ onClick, onMouseDown, onMouseUp, active }) {
  const labelStyle = (active ? {color: '#FFF'} : {color: '#000'})

  return (
    <Button
      onPress={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={labelStyle}
    >
      ?
    </Button>
  )
}

function SoundButton ({ onClick, active }) {
  const label = (active ? '🔊' : '🔇')
  const labelStyle = (active ? {color: '#FFF'} : {color: '#000'})

  return (
    <Button onPress={onClick} style={labelStyle}>
      {label}
    </Button>
  )
}

class UserInput extends React.Component {
  constructor (props) {
    super(props)

    this.formActions = this.props.formActions
    this.helpActions = this.props.helpActions
    this.soundActions = this.props.soundActions
  }

  render () {
    return (
      <div className="user-input" style={styles['Input']}>
        <InputForm
          onChange={this.formActions.textInputChanged}
          onSubmit={this.formActions.submitButtonPressed}
          submitDown={this.formActions.submitButtonDown}
          submitUp={this.formActions.submitButtonUp}
          active={this.props.submit}
        />
        <HelpButton
          onClick={this.helpActions.helpButtonPressed}
          onMouseDown={this.helpActions.helpButtonMousedown}
          onMouseUp={this.helpActions.helpButtonMouseup}
          active={this.props.help}
        />
        <SoundButton
          onClick={this.soundActions.audioButtonPressed}
          active={this.props.audio}
        />
      </div>
    )
  }
}

export default UserInput
