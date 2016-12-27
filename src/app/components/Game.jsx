import React from 'react'

import TextDisplayContainer from '../containers/TextDisplayContainer'
import UserInputContainer from '../containers/UserInputContainer'

function Game () {
  return (
    <div className="game">
      <TextDisplayContainer />
      <div className="user-input">
        <UserInputContainer />
      </div>
    </div>
  )
}

export default Game
