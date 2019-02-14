import types from './actionTypes'
import { createSimpleAction, createAPIAction } from '../helpers'

const requestComputation = createAPIAction({
  url: '/smpc/histogram',
  beforeAction: createSimpleAction(types.SUBMIT_COMPUTATION),
  afterAction: createSimpleAction(types.SUBMIT_COMPUTATION_SUCCESS)
})

const checkComputationStatus = createAPIAction({
  url: '/smpc/queue/:id',
  beforeAction: createSimpleAction(types.CHECK_COMPUTATION_STATUS),
  afterAction: createSimpleAction(types.CHECK_COMPUTATION_STATUS_SUCCESS)
})

export {
  requestComputation,
  checkComputationStatus
}