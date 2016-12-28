import React from 'react'

import InputForm from './InputForm'
import HelpButton from './HelpButton'
import SoundButton from './SoundButton'

const styles = {
  'Input': {
    width: '98%',
    height: '6%',
    marginLeft: '20px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}

class UserInput extends React.Component {
  constructor (props) {
    super(props)

    this.actions = this.props.actions
  }

  render () {
    return (
      <div className="user-input" style={styles['Input']}>
        <InputForm onChange={this,actions.textInputChanged} onSubmit={this.actions.submitButtonPressed} />
        <HelpButton onClick={this.actions.helpButtonPressed} />
        <SoundButton onClick={this.actions.audioButtonPressed} active={this.props.audio} />
      </div>
    )
  }
}

export default UserInput
