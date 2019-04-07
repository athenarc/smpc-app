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
    console.log(error.response)
    store.dispatch(addNotification({ msg: error.response.data.msg }))

    // if (!error.hasOwnProperty('response')) {
    //   store.dispatch(addNotification(`Error: ${error.message}`))
    //   return Promise.reject(error)
    // }
    //
    // if (error.response.data && error.response.data.error) {
    //   const e = error.response.data.error
    //   store.dispatch(addNotification(e.message))
    //   return Promise.reject(error)
    // }
    //
    // if (error.response.status === 404) {
    //   store.dispatch(addNotification('404! The page you are looking for can\'t be found'))
    // }
    //
    // if (error.response.status === 500) {
    //   store.dispatch(addNotification(`Request failed with status code 500: ${error.message}`))
    // }

    return Promise.reject(error)
  }

  axios.interceptors.request.use(requestThen, requestCatch)
  axios.interceptors.response.use(responseThen, responseCatch)
}

export {
  setupInterceptors
}
