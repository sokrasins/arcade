import React from 'react'

import InputForm from './InputForm'
import HelpButton from './HelpButton'

function UserInput ({ actions }) {
  return (
    <div className="user-input">
      <InputForm onChange={actions.textInputChanged} onSubmit={actions.submitButtonPressed} />
      <HelpButton onClick={actions.helpButtonPressed} />
    </div>
  )
}

export default UserInput
