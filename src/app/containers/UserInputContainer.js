import { connect } from 'react-redux'
import { 
  textInputChanged, 
  submitButtonPressed, 
  helpButtonPressed,
  audioButtonPressed
} from '../actions/index.js'

import UserInput from '../components/UserInput'

const mapStateToProps = (state) => {
  return {
    audio: state.audio
  }
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    textInputChanged: (text) => dispatch(textInputChanged(text)),
    submitButtonPressed: () => dispatch(submitButtonPressed()),
    helpButtonPressed: () => dispatch(helpButtonPressed()),
    audioButtonPressed: () => dispatch(audioButtonPressed())
  }
})

const UserInputContainer = connect(mapStateToProps, mapDispatchToProps)(UserInput)
export default UserInputContainer
