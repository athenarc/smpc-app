import types from '../actions/actionTypes'
import { createReducer } from '../helpers'

const notifications = createReducer([], {
  [types.ADD_NOTIFICATION]: (state, action) => { return [ ...state, { ...action.payload.data } ] },
  [types.REMOVE_NOTIFICATION]: (state, action) => { console.log(action); return state.filter(toast => toast.id !== action.payload.data.id) }
})

export default notifications
