import React from 'react'

import InputForm from './InputForm'
import HelpButton from './HelpButton'

const styles = {
  'Input': {
    width: '98%',
    height: '6%',
    marginLeft: '20px',
    display: 'flex',
    justifyContent: 'space-between'
  }
}

function UserInput ({ actions }) {
  return (
    <div className="user-input" style={styles['Input']}>
      <InputForm onChange={actions.textInputChanged} onSubmit={actions.submitButtonPressed} />
      <HelpButton onClick={actions.helpButtonPressed} />
    </div>
  )
}

export default UserInput
