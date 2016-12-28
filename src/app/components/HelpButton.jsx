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

function HelpButton ({ onClick }) {
  return (
    <Button disabled={false} onPress={onClick} style={styles['Help']}>
      ? 
    </Button>
  )
}

export default HelpButton
