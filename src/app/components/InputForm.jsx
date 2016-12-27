import React from 'react'

const styles = {
  'TextInput': {
    width: '400px',
    backgroundColor: '#555555',
    color: '#FFFFFF'
  },

  'Form': {
    display: 'inline',
    padding: '10px'
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
      <form onSubmit={this.handleSubmit} style={styles['Form']}>
        <input type="text" name="command" ref="command" onChange={this.handleChange} style={styles['TextInput']} autoFocus />
        <input type="submit" value="Send" />
      </form>
    )
  }
}

export default InputForm
