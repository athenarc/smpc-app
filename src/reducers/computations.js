import types from '../actions/actionTypes'
import { createReducer, findComputationIndexById } from '../helpers'

const updateComputations = (state, action) => {
  let computationIndex = findComputationIndexById(state, action.payload.data.id)

  if (computationIndex !== -1) {
    const comp = { ...state[computationIndex], ...action.payload.data }
    return state
        .slice(0, computationIndex)
        .concat([comp])
        .concat(state.slice(computationIndex + 1))
  }

  return [ ...state, { ...action.payload.data } ]
}

const computations = createReducer([], {
  [types.ADD_COMPUTATION]: (state, action) => { return [ ...state, ...action.payload.data ] },
  [types.DELETE_COMPUTATION]: (state, action) => {
    let computationIndex = findComputationIndexById(state, action.payload.data.id)

    if (computationIndex !== -1) {
      return state
          .slice(0, computationIndex)
          .concat(state.slice(computationIndex + 1))
    }

    return [ ...state ]
  },
  [types.SUBMIT_COMPUTATION_SUCCESS]: (state, action) => { return [ ...state, { ...action.payload.data } ] },
  [types.CHECK_COMPUTATION_STATUS_SUCCESS]: (state, action) => { return updateComputations(state, action) },
  [types.GET_SINGLE_COMPUTATION_SUCCESS]: (state, action) => { return updateComputations(state, action) }

})

export default computations
