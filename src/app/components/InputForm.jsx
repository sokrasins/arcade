import React from 'react'
import Button from './common/Button'

const styles = {
  'TextInput': {
    width: '100%',
    backgroundColor: '#222222',
    color: '#FFFFFF',
    fontSize: '20px',
    paddingLeft: '3px',
    outline: 'none',
    border: 'none'
  },

  'Form': {
    display: 'flex',
    width: '95%',
    height: '40px'
  }
}

function SubmitButton ({ onClick, onMouseDown, onMouseUp, active }) {
  const labelStyle = (active ? {color: '#FFF'} : {color: '#000'})

  return (
    <Button
      onPress={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      style={labelStyle}
    >
      &#x25ba;      
    </Button>
  )
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
    return (
      <form style={styles['Form']} autoComplete="off">
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
        <SubmitButton
          onClick={this.handleSubmit}
          onMouseDown={this.props.submitDown}
          onMouseUp={this.props.submitUp}
          active={this.props.active}
        />
      </form>
    )
  }
}

export default InputForm

