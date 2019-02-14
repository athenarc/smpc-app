import types from '../actions/actionTypes'
import { createReducer } from '../helpers'

const computations = createReducer([], {
  [types.ADD_COMPUTATION]: (state, action) => { return [ ...state ] },
})

export default computations
