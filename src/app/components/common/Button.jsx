import React, { PropTypes } from 'react'

function Button ({children, disabled, onPress}) {
  return (
    <span>
      <button disabled={disabled} onClick={onPress}>
        {children}
      </button>
    </span>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  onPress: PropTypes.func
}
