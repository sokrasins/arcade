import React from 'react'

const styles = {
  'TextInput': {
    width: '100%',
    backgroundColor: '#222222',
    color: '#FFFFFF',
    fontSize: '20px',
    outline: 'none',
    border: 'none'
  },

  'Form': {
    display: 'flex',
    width: '95%',
    height: '40px'
  },

  'Submit': {
    display: 'flex',
    fontSize: '20px',
    justifyContent: 'center',
    height: '40px',
    width: '40px',
    border: 'none',
    margin: 'auto',
    backgroundColor: '#777',
    outline: 'none'
  }
}

class InputForm extends React.Component {
  constructor (props) {
    super(props)

    this.onChange = this.props.onChange
    this.onSubmit = this.props.onSubmit

    // Bind this to event handlers
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleKeyUp = this.handleKeyUp.bind(this)
  }

  handleChange (event) {
    this.onChange(event.target.value)
  }

  handleSubmit (event) {
    this.onSubmit()
    event.preventDefault()
    this.refs.command.value = ''
  }

  handleKeyDown (event) {
    if (event.keyCode === 13) {
      this.props.submitDown()
    }
  }

  handleKeyUp (event) {
    if (event.keyCode === 13) {
      this.props.submitUp()
    }
  }

  render () {
    const labelStyle = (this.props.active ? {color: '#FFF'} : {color: '#000'})

    return (
      <form onSubmit={this.handleSubmit} style={styles['Form']} autoComplete="off">
        <input type="text"
          placeholder="What will you do?"
          name="command"
          ref="command"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onKeyUp={this.handleKeyUp}
          style={styles['TextInput']}
          autoFocus
          fontFamily="Lucida Console, Monaco, monospace"
        />
        <input type="submit"
          value="&#x25ba;"
          onMouseDown={this.props.submitDown}
          onMouseUp={this.props.submitUp}
          style={Object.assign({}, styles['Submit'], labelStyle)}
        />
      </form>
    )
  }
}

export default InputForm
