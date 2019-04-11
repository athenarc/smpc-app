import types from './actionTypes'
import { createSimpleAction, createAPIAction } from '../helpers'

const requestHistCategorical = createAPIAction({
  url: '/smpc/histogram',
  action: 'post',
  beforeAction: createSimpleAction(types.SUBMIT_COMPUTATION),
  afterAction: createSimpleAction(types.SUBMIT_COMPUTATION_SUCCESS)
})

const checkComputationStatus = createAPIAction({
  url: '/smpc/queue/:id',
  beforeAction: createSimpleAction(types.CHECK_COMPUTATION_STATUS),
  afterAction: createSimpleAction(types.CHECK_COMPUTATION_STATUS_SUCCESS)
})

const getSingleComputation = createAPIAction({
  url: '/smpc/queue/:id',
  beforeAction: createSimpleAction(types.GET_SINGLE_COMPUTATION),
  afterAction: createSimpleAction(types.GET_SINGLE_COMPUTATION_SUCCESS)
})

const addComputation = createSimpleAction(types.ADD_COMPUTATION)

export {
  requestHistCategorical,
  checkComputationStatus,
  getSingleComputation,
  addComputation,
}
