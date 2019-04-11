import axios from 'axios'

const BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3000'

const buildActionTypes = (types) => {
  return types.reduce((obj, item) => {
    obj[item] = item
    return obj
  }, {})
}

const createReducer = (intialState, handlers) => {
  return (state = intialState, action) => {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }

    return state
  }
}

const createSimpleAction = (type) => {
  return (data = {}) => {
    return { type, payload: { data } }
  }
}

const createAPIAction = ({ url, action = 'get', beforeAction, afterAction }) => {
  return (routeParameters = {}, requestData = {}) => {
    return async dispatch => {
      dispatch(beforeAction())

      let normalizedURL = `${BASE_URL}${url}`

      normalizedURL = Object.keys(routeParameters).reduce((prev, cur) => prev.replace(`:${cur}`, routeParameters[cur]), normalizedURL)

      const res = await axios[action](normalizedURL, requestData)

      dispatch(afterAction(res.data))
      return res.data
    }
  }
}

const findComputationIndexById = (arr, id) => {
  return arr.findIndex((item) => item.id === id)
}

export {
  createReducer,
  buildActionTypes,
  createSimpleAction,
  createAPIAction,
  findComputationIndexById
}
