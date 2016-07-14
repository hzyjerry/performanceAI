
import {upload, UPLOAD} from '../actions'

const initialState = {
	upload: false
}

export default function update(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case UPLOAD:
      console.log("Upload")
      return state
    default:
      return state
  }
}