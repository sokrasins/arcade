import { connect } from 'react-redux'
import { textInputChanged, submitButtonPressed, helpButtonPressed } from '../actions/index.js'

import UserInput from '../components/UserInput'

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => ({
  actions: {
    textInputChanged: (text) => dispatch(textInputChanged(text)),
    submitButtonPressed: () => dispatch(submitButtonPressed()),
    helpButtonPressed: () => dispatch(helpButtonPressed())
  }
})

const UserInputContainer = connect(mapStateToProps, mapDispatchToProps)(UserInput)
export default UserInputContainer
