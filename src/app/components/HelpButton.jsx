import React from 'react'
import Button from './common/Button'

function HelpButton ({ onClick }) {
  return (
    <Button disabled={false} onPress={onClick}>
      Help
    </Button>
  )
}

export default HelpButton
