import React from 'react'
import { Provider } from 'react-redux'
import { History, navigate } from 'redux-routing'

import configureStore from './lib/configureStore'
import shortcutStore  from './lib/shortcutStore'

import Root from './lib/Root'
import Shawty from './lib/Shawty'

const routeStore = configureStore(window._state, History)

routeStore.dispatch(navigate(window._state.href))

React.render(<Provider store={routeStore}>
  {() => <Root />}
</Provider>, document.getElementById('root'))

React.render(<Provider store={shortcutStore}>
  {() => <Shawty />}
</Provider>, document.getElementById('shawty'))
