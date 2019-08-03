import types from '../actions/actionTypes'
import { createReducer } from '../helpers'

const user = createReducer({}, {
  [types.LOGIN_SUCCESS]: (state, action) => ({ ...state, ...action.payload.data, isAuthenticated: true }),
  [types.LOGOUT]: (state, action) => ({ user: { isAuthenticated: false } }),
  [types.UNAUTHORIZED]: (state, action) => ({ user: { isAuthenticated: false } })
})

export default user
