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

import {
  login,
  logout,
  unauthorized
} from './authentication'

export default {
  requestHistogram,
  checkComputationStatus,
  addComputation,
  deleteComputation,
  addNotification,
  closeNotification,
  getSingleComputation,
  initWebsocket,
  emit,
  login,
  logout,
  unauthorized
}
