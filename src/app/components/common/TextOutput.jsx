import React from 'react'

const styles = {
  'TextDisplay': {
    position: 'relative',
    textAlign: 'center',
    align: 'center',
    width: '800px',
    height: '600px',
    marginBottom: '30px',
    backgroundColor: '#555555',
    color: '#FFFFFF'
  },

  'TextContent': {
    textAlign: 'left',
    width: '800px',
    height: '600px',
    position: 'absolute',
    bottom: '0px',
    left: '0px',
    overflowY: 'scroll'
  }
}

class TextOutput extends React.Component {
  render () {
    var displayText = []
    for (var i in this.props.text) {
      displayText.push(this.props.text[i])
      displayText.push(<br key={i} />)
    }

    return (
      <div className="text-display" style={styles['TextDisplay']}>
        <div className="text-content" style={styles['TextContent']}>
          {displayText}
        </div>
      </div>
    )
  }
}

export default TextOutput
