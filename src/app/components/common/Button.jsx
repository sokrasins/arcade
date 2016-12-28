import React, { PropTypes } from 'react'

function Button ({children, disabled, onPress, onMouseDown, onMouseUp, style}) {
  return (
    <span>
      <button disabled={disabled} onClick={onPress} onMouseDown={onMouseDown} onMouseUp={onMouseUp} style={style}>
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
