import types from '../actions/actionTypes'
import { createReducer } from '../helpers'

const computations = createReducer([], {
  [types.ADD_COMPUTATION]: (state, action) => { return [ ...state ] },
  [types.SUBMIT_COMPUTATION_SUCCESS]: (state, action) => { return [ ...state, { ...action.payload.data } ] },
})

export default computations
