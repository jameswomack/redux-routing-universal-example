import { createStore } from 'redux'

function passthrough (state = 'mod+left', action) {
  if (action.type !== 'SHORTCUT' && typeof action.command === 'string') {
    return state
  }

  return state = action.command
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(passthrough)

const commands = [
  'mod+left', 'mod+right'
]

if (typeof window !== 'undefined') {
  const Mousetrap = require('mousetrap')

  Mousetrap.bind(commands, function (event, command) {
    store.dispatch({
      command,
      type   : 'SHORTCUT'
    })

    return false;
  })

  Object.defineProperty(store, 'internals', {
    value : {
      Mousetrap
    }
  })
}

export default store
