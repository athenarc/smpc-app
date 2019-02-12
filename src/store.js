import throttle from 'lodash/throttle'
import { loadState, saveState } from './localStorage'
import appReducers from './reducers'
const persistedState = loadState()
  appReducers,
  persistedState,
store.subscribe(throttle(() => {
  saveState({
    requests: store.getState().requests
  })
}), 1000)
