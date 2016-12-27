import React, { PropTypes } from 'react'

const styles = {
  'main': {
    backgroundColor: '#333333'
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
