import types from './actionTypes'

let hideTimeout

const addNotification = (data = {}) => {
  return dispatch => {
    clearTimeout(hideTimeout)
    hideTimeout = setTimeout(dispatch.bind({}, closeNotification(data)), 7000)
    dispatch({ type: types.ADD_NOTIFICATION, payload: { data } })
  }
}

const closeNotification = (data = {}) => {
  clearTimeout(hideTimeout)
  return { type: types.REMOVE_NOTIFICATION, payload: { data } }
}

export {
  addNotification,
  closeNotification
}
