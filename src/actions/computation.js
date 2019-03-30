import types from './actionTypes'
import { createSimpleAction, createAPIAction } from '../helpers'

const requestHistCategorical = createAPIAction({
  url: '/smpc/histogram/categorical',
  action: 'post',
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
