import React from 'react'
import Button from './common/Button'

const styles = {
  'Help': {
    display: 'flex',
    justifyContent: 'center',
    height: '40px',
    width: '40px',
    fontSize: '20px',
    backgroundColor: '#555',
    fontColor: '#FFF',
    border: 'none',
    outline: 'none'
  }
}

function HelpButton ({ onClick, onMouseDown, onMouseUp, active }) {
  const labelStyle = (active ? {color: '#FFF'} : {color: '#000'})

  return (
    <Button disabled={false} onPress={onClick} onMouseDown={onMouseDown} onMouseUp={onMouseUp} style={Object.assign({}, styles['Help'], labelStyle)}>
      ?
    </Button>
  )
}

export default HelpButton
