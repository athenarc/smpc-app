import { buildActionTypes } from '../helpers'

const types = [
  'ADD_COMPUTATION',
  'ADD_NOTIFICATION',
  'REMOVE_NOTIFICATION',
  'SUBMIT_COMPUTATION',
  'SUBMIT_COMPUTATION_SUCCESS',
  'CHECK_COMPUTATION_STATUS',
  'CHECK_COMPUTATION_STATUS_SUCCESS'
]

const objTypes = buildActionTypes(types)

export default objTypes
