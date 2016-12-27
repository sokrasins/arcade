import createLogger from 'redux-logger'

export default createLogger({
  collapsed: true,
  duration: true,
  logErrors: false,
  diff: true,
  predicate: ignoreActions
})

// don't log if there's a "log: false" meta field:
//
//     {
//       type: "MOUSE_MOVE"
//       meta: { log: false }
//     }
//
function ignoreActions (_, action) {
  if (action.meta && 'log' in action.meta) {
    return Boolean(action.meta.log)
  }
  return true
}
