
import {UPLOAD} from '../actions'

const initialState = {
	upload: false
}

export default function upload(state = initialState, action) {
  switch (action.type) {
    case UPLOAD:
      return state
    default:
      return state
  }
}