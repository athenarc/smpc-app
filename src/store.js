import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import throttle from 'lodash/throttle'

import { loadState, saveState } from './localStorage'
import appReducers from './reducers'

const loggerMiddleware = createLogger()
const persistedState = loadState()

const store = createStore(
  appReducers,
  persistedState,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

store.subscribe(throttle(() => {
  saveState({
    computations: store.getState().computations
  })
}), 1000)

export default store
