import types from '../actions/actionTypes'
import { createReducer } from '../helpers'

const user = createReducer({}, {
  [types.LOGIN_SUCCESS]: (state, action) => ({ ...state, ...action.payload.data }),
  [types.LOGOUT]: (state, action) => ({ user: {} })
})

export default user
