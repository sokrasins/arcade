import React from 'react'
import ReactDOM from 'react-dom'

const styles = {
  'TextDisplay': {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    margin: '20px',
    width: '98%',
    height: '94%',
    backgroundColor: '#222222',
    color: '#FFFFFF'
  },

  'TextContent': {
    position: 'absolute',
    width: '100%',
    height: '100%',
    textAlign: 'left',
    bottom: '0px',
    left: '0px',
    fontSize: '20px',
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
        <div className="text-content" ref="textContent" style={styles['TextContent']}>
          {displayText}
        </div>
      </div>
    )
  }

  componentDidUpdate () {
    let node = ReactDOM.findDOMNode(this.refs.textContent)
    node.scrollTop = node.scrollHeight
  }
}

export default TextOutput
