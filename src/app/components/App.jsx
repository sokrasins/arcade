import React, { PropTypes } from 'react'

const styles = {
  'main': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#111111',
    width: '100%',
    height: '100%'
  }
}

function App ({ children }) {
  return (
    <div className="container" style={styles['main']}>
      {children}
    </div>
  )
}

App.propTypes = { children: PropTypes.object }

export default App
