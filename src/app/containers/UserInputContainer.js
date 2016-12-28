import { connect } from 'react-redux'
import {
  textInputChanged,
  submitButtonPressed,
  helpButtonPressed,
  audioButtonPressed,
  helpButtonMousedown,
  helpButtonMouseup,
  submitButtonDown,
  submitButtonUp
} from '../actions/index.js'

import UserInput from '../components/UserInput'

const mapStateToProps = (state) => {
  return {
    audio: state.audio,
    help: state.help,
    submit: state.submit
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    textInputChanged: (text) => dispatch(textInputChanged(text)),
    submitButtonPressed: () => dispatch(submitButtonPressed()),
    helpButtonPressed: () => dispatch(helpButtonPressed()),
    audioButtonPressed: () => dispatch(audioButtonPressed()),
    helpButtonMousedown: () => dispatch(helpButtonMousedown()),
    helpButtonMouseup: () => dispatch(helpButtonMouseup()),
    submitButtonDown: () => dispatch(submitButtonDown()),
    submitButtonUp: () => dispatch(submitButtonUp())
  }
})

const UserInputContainer = connect(mapStateToProps, mapDispatchToProps)(UserInput)
export default UserInputContainer
