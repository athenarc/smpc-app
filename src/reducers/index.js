import { combineReducers } from 'redux'
import computations from './computations'
import notifications from './notifications'
import user from './user'

const app = combineReducers({
  computations,
  notifications,
  user
})

export default app
