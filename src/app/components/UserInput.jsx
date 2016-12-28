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
    <Button disabled={false} onPress={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp} style={labelStyle}>
      ?
    </Button>
  )
}

function SoundButton ({ onClick, active }) {
  const label = (active ? '🔊' : '🔇')
  const labelStyle = (active ? {color: '#FFF'} : {color: '#000'})

  return (
    <Button disabled={false} onPress={onClick} style={labelStyle}>
      {label}
    </Button>
  )
}

class UserInput extends React.Component {
  constructor (props) {
    super(props)

    this.actions = this.props.actions
  }

  render () {
    return (
      <div className="user-input" style={styles['Input']}>
        <InputForm
          onChange={this.actions.textInputChanged}
          onSubmit={this.actions.submitButtonPressed}
          submitDown={this.actions.submitButtonDown}
          submitUp={this.actions.submitButtonUp}
          active={this.props.submit}
        />
        <HelpButton
          onClick={this.actions.helpButtonPressed}
          onMouseDown={this.actions.helpButtonMousedown}
          onMouseUp={this.actions.helpButtonMouseup}
          active={this.props.help}
        />
        <SoundButton
          onClick={this.actions.audioButtonPressed}
          active={this.props.audio}
        />
      </div>
    )
  }
}

export default UserInput
