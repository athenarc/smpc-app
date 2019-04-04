import types from '../actions/actionTypes'
import { createReducer } from '../helpers'

const findComputationById = (arr, id) => {
  return arr.findIndex((item) => item.id === id)
}

const computations = createReducer([], {
  [types.ADD_COMPUTATION]: (state, action) => { return [ ...state, ...action.payload.data ] },
  [types.SUBMIT_COMPUTATION_SUCCESS]: (state, action) => { return [ ...state, { ...action.payload.data } ] },
  [types.CHECK_COMPUTATION_STATUS_SUCCESS]: (state, action) => {
    let computationIndex = findComputationById(state, action.payload.data.id)

    if (computationIndex !== -1) {
      const comp = { ...state[computationIndex], ...action.payload.data }
      return state
        .slice(0, computationIndex)
        .concat([comp])
        .concat(state.slice(computationIndex + 1))
    }

    return [ ...state, { ...action.payload.data } ]
  }

})

export default computations
