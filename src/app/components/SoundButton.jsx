import React from 'react'
import Button from './common/Button'

const styles = {
  'Sound': {
    display: 'flex',
    justifyContent: 'center',
    height: '40px',
    width: '40px',
    fontSize: '20px',
    backgroundColor: '#555',
    border: 'none',
    outline: 'none'
  }
}

function SoundButton ({ onClick, active }) {
  const label = (active ? '🔊' : '🔇')
  const labelStyle = (active ? {color: '#FFF'} : {color: '#000'})

  return (
    <Button disabled={false} onPress={onClick} style={Object.assign({}, styles['Sound'], labelStyle)}>
      {label}
    </Button>
  )
}

export default SoundButton
