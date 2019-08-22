import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

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
    return async (dispatch, getState) => {
      dispatch(beforeAction())

      const user = getState().user
      let config = { method: action, data: requestData }
      let normalizedURL = `${BASE_URL}${url}`

      normalizedURL = Object.keys(routeParameters).reduce((prev, cur) => prev.replace(`:${cur}`, routeParameters[cur]), normalizedURL)

      config['url'] = normalizedURL

      if (user && user.jwt_token) {
        config['headers'] = { Authorization: `Bearer ${user.jwt_token}` }
      }

      const res = await axios.request(config)

      dispatch(afterAction(res.data))
      return res.data
    }
  }
}

const findComputationIndexById = (arr, id) => {
  return arr.findIndex((item) => item.id === id)
}

const wrapWithLink = ({ to, context, classes }) => {
  return (
    <Link className={classes} to={to}><b>{context}</b></Link>
  )
}

const wrapComputationIDWithLink = id => {
  return wrapWithLink({ to: `/computation/${id}`, context: id, classes: 'notification-link' })
}

const getNotificationMessage = job => {
  let msg = {}
  console.log(job.status)

  switch (job.status) {
    case 'completed':
      msg = { msg: (<span>Computation with ID {wrapComputationIDWithLink(job.id)} completed.</span>), type: 'success', title: 'Success' }
      break;
    case 'pending':
      msg = { msg: (<span>Computation with ID {wrapComputationIDWithLink(job.id)} was added to queue.</span>), type: 'info', title: 'Information' }
      break;
    case 'failed':
      msg = { msg: (<span>Computation with ID {wrapComputationIDWithLink(job.id)} failed.</span>), type: 'error', title: 'Error' }
      break;
    case 'processing':
      msg = { msg: (<span>Computation with ID {wrapComputationIDWithLink(job.id)} is being processed.</span>), type: 'info', title: 'Information' }
      break;
    default:
  }

  return msg
}

export {
  createReducer,
  buildActionTypes,
  createSimpleAction,
  createAPIAction,
  findComputationIndexById,
  getNotificationMessage
}
