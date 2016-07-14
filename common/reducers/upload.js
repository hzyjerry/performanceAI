
import {UPLOAD} from '../actions'

const initialState = false

export default function upload(state = initialState, action) {
  switch (action.type) {
    case UPLOAD:
      return true
    default:
      return state
  }
}