import React, { PropTypes } from 'react'

const styles = {
  'default': {
    display: 'flex',
    justifyContent: 'center',
    height: '40px',
    width: '40px',
    fontSize: '20px',
    backgroundColor: '#777',
    fontColor: '#FFF',
    fontWeight: 'bold',
    border: 'none',
    outline: 'none'
  }
}

function Button ({children, onPress, onMouseDown, onMouseUp, style}) {
  return (
    <span>
      <button onClick={onPress} onMouseDown={onMouseDown} onMouseUp={onMouseUp} style={Object.assign({}, styles['default'], style)}>
        {children}
      </button>
    </span>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  style: PropTypes.object
}

export default Button
