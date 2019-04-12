import axios from 'axios'

import actions from './actions'

const addNotification = actions.addNotification

const setupInterceptors = (store) => {
  const requestThen = (config) => {
    return config
  }

  const requestCatch = (error) => {
    return Promise.reject(error)
  }

  const responseThen = (res) => {
    return res
  }

  const responseCatch = (error) => {
    if (!error.hasOwnProperty('response') || error.response === undefined) {
      store.dispatch(addNotification({ msg: `Error: ${error.message}`, type: 'error', title: 'Error' }))
      return Promise.reject(error)
    }

    if (error.response.data && error.response.data.error) {
      const msg = error.response.data.error.msg
      store.dispatch(addNotification({ msg, type: 'error', title: 'Error' }))
      return Promise.reject(error)
    }

    if (error.response.status === 400) {
      store.dispatch(addNotification({ msg: '400! Bad Request', type: 'error', title: 'Error' }))
    }

    if (error.response.status === 404) {
      store.dispatch(addNotification({ msg: '404! The page you are looking for cannot be found', type: 'error', title: 'Error' }))
    }

    if (error.response.status === 500) {
      store.dispatch(addNotification({ msg: `Request failed with status code 500: ${error.message}`, type: 'error', title: 'Error' }))
    }

    return Promise.reject(error)
  }

  axios.interceptors.request.use(requestThen, requestCatch)
  axios.interceptors.response.use(responseThen, responseCatch)
}

export {
  setupInterceptors
}
