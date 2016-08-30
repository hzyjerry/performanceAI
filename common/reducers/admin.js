import { ADMIN_LOGIN, USER_LOGIN } from '../actions'

const initialState = true

export default function admin(state = initialState, action) {
  switch (action.type) {
    case ADMIN_LOGIN:
      return true
    default:
      return false
  }
}