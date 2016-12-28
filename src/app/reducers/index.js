import {
  TEXT_INPUT_CHANGED,
  SUBMIT_BUTTON_PRESSED,
  HELP_BUTTON_PRESSED,
  AUDIO_BUTTON_PRESSED
} from '../actions/types'

export const dialog = (state = {'newText': '', 'text': ['Hello']}, action) => {
  switch (action.type) {
    case TEXT_INPUT_CHANGED:
      return Object.assign({}, state, {'newText': action.payload})
    case SUBMIT_BUTTON_PRESSED:
      if (state.newText !== '') {
        return Object.assign({}, state, {'newText': '', 'text': state.text.concat(state.newText)})
      }
      return state
    case HELP_BUTTON_PRESSED:
      return Object.assign({}, state, {'text': state.text.concat('Sending help...')})
    default:
      return state
  }
}

export const audio = (state = false, action) => {
  switch (action.type) {
    case AUDIO_BUTTON_PRESSED:
      return !state
    default:
      return state
  }
}
