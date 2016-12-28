import {
  TEXT_INPUT_CHANGED,
  SUBMIT_BUTTON_PRESSED,
  HELP_BUTTON_PRESSED,
  AUDIO_BUTTON_PRESSED,
  HELP_BUTTON_MOUSEDOWN,
  HELP_BUTTON_MOUSEUP,
  SUBMIT_BUTTON_DOWN,
  SUBMIT_BUTTON_UP
} from './types'

export const textInputChanged = (text) => ({
  type: TEXT_INPUT_CHANGED,
  payload: text
})

export const submitButtonPressed = () => ({
  type: SUBMIT_BUTTON_PRESSED
})

export const helpButtonPressed = () => ({
  type: HELP_BUTTON_PRESSED
})

export const audioButtonPressed = () => ({
  type: AUDIO_BUTTON_PRESSED
})

export const helpButtonMousedown = () => ({
  type: HELP_BUTTON_MOUSEDOWN
})

export const helpButtonMouseup = () => ({
  type: HELP_BUTTON_MOUSEUP
})

export const submitButtonDown = () => ({
  type: SUBMIT_BUTTON_DOWN
})

export const submitButtonUp = () => ({
  type: SUBMIT_BUTTON_UP
})
