import types from './actionTypes'
import { createSimpleAction, createAPIAction } from '../helpers'

const login = createAPIAction({
  url: '/auth/login',
  action: 'post',
  beforeAction: createSimpleAction(types.LOGIN),
  afterAction: createSimpleAction(types.LOGIN_SUCCESS)
})

export {
  login
}
