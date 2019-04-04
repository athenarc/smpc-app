import { combineReducers } from 'redux'
import computations from './computations'
import notifications from './notifications'

const app = combineReducers({
  computations,
  notifications
})

export default app
