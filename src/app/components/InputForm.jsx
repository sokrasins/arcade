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
    height: '40px',
  },

  'Submit': {
    display: 'flex',
    justifyContent: 'center',
    height: '40px',
    width: '40px',
    border: 'none',
    margin: 'auto',
    backgroundColor: '#555',
    outline: 'none'
  }
}

class InputForm extends React.Component {
  constructor (props) {
    super(props)

    this.onChange = this.props.onChange
    this.onSubmit = this.props.onSubmit

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.onChange(event.target.value)
  }

  handleSubmit (event) {
    this.onSubmit()
    event.preventDefault()
    this.refs.command.value = ''
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit} style={styles['Form']} autoComplete="off">
        <input type="text" name="command" ref="command" onChange={this.handleChange} style={styles['TextInput']} autoFocus />
        <input type="submit" value="&#x25ba;" style={styles['Submit']} />
      </form>
    )
  }
}

export default InputForm
