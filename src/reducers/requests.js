import types from '../actions/actionTypes'
import { createReducer } from '../helpers'

const requests = createReducer([], {
  [types.ADD_REQUEST]: (state) => { return [ ...state ] }
})

export default requests
