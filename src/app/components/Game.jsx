import React from 'react'

import TextDisplayContainer from '../containers/TextDisplayContainer'
import UserInputContainer from '../containers/UserInputContainer'

const styles = {
  'game': {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }
}

function Game () {
  return (
    <div className="game" style={styles['game']}>
      <TextDisplayContainer />
      <UserInputContainer />
    </div>
  )
}

export default Game
