import types from './actionTypes'
import { createSimpleAction, createAPIAction } from '../helpers'

const login = createAPIAction({
  url: '/auth/login',
  action: 'post',
  beforeAction: createSimpleAction(types.LOGIN),
  afterAction: createSimpleAction(types.LOGIN_SUCCESS)
})

const logout = () => {
  return { type: types.LOGOUT, payload: {} }
}

const unauthorized = () => {
  return { type: types.UNAUTHORIZED, payload: {} }
}

export {
  login,
  logout,
  unauthorized
}
