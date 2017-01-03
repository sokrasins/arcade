import {
  TEXT_INPUT_CHANGED,
  SUBMIT_BUTTON_PRESSED,
  HELP_BUTTON_PRESSED,
  AUDIO_BUTTON_PRESSED,
  HELP_BUTTON_MOUSEDOWN,
  HELP_BUTTON_MOUSEUP,
  SUBMIT_BUTTON_DOWN,
  SUBMIT_BUTTON_UP
} from '../actions/types'

// Handle changes with text entry and display text
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

// Handle changes related to audio
// TODO: change default state to 'true'
export const audio = (state = true, action) => {
  switch (action.type) {
    case AUDIO_BUTTON_PRESSED:
      return !state
    default:
      return state
  }
}

// Handle changes related to help
export const help = (state = false, action) => {
  switch (action.type) {
    case HELP_BUTTON_MOUSEDOWN:
      return true
    case HELP_BUTTON_MOUSEUP:
      return false
    default:
      return state
  }
}

// Handle UI changes related to text submission
export const submit = (state = false, action) => {
  switch (action.type) {
    case SUBMIT_BUTTON_DOWN:
      return true
    case SUBMIT_BUTTON_UP:
      return false
    default:
      return state
  }
}
