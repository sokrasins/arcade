import {
  TEXT_INPUT_CHANGED,
  SUBMIT_BUTTON_PRESSED,
  HELP_BUTTON_PRESSED
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
