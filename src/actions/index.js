import {
  requestHistogram,
  checkComputationStatus,
  getSingleComputation,
  deleteComputation,
  addComputation
} from './computation'

import {
  addNotification,
  closeNotification
} from './notification'

import {
  initWebsocket,
  emit
} from './websocket'

export default {
  requestHistogram,
  checkComputationStatus,
  addComputation,
  deleteComputation,
  addNotification,
  closeNotification,
  getSingleComputation,
  initWebsocket,
  emit
}
