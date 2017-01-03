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
  formActions: {
    textInputChanged: (text) => dispatch(textInputChanged(text)),
    submitButtonPressed: () => dispatch(submitButtonPressed()),
    submitButtonDown: () => dispatch(submitButtonDown()),
    submitButtonUp: () => dispatch(submitButtonUp())
  },
  helpActions: {
    helpButtonPressed: () => dispatch(helpButtonPressed()),
    helpButtonMousedown: () => dispatch(helpButtonMousedown()),
    helpButtonMouseup: () => dispatch(helpButtonMouseup())
  },
  soundActions: {
    audioButtonPressed: () => dispatch(audioButtonPressed())
  }
})

const UserInputContainer = connect(mapStateToProps, mapDispatchToProps)(UserInput)
export default UserInputContainer
