import { applyMiddleware, createStore } from 'redux'
import { createMiddleware, reducer } from 'redux-routing'

function configureStore (initialState, history) {
  const middleware = createMiddleware(history)
  const createStoreWithMiddleware = applyMiddleware(middleware)(createStore)

  return createStoreWithMiddleware(reducer, initialState)
}

export default configureStore
