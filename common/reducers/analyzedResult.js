
import {ANALYZE_REQUEST, ANALYZE_FAILURE, ANALYZE_SUCCESS} from '../actions'

const initialFetchingState = {
	isFetching: false,
    didInvalidate: false,
    results: {},
    errror: ""
}

export default function analyzedResult(state = initialFetchingState, action) {
	switch (action.type) {
	    case ANALYZE_REQUEST:
	      $("#overlay").LoadingOverlay("show", {
	        image       : "",
	        fontawesome : "fa fa-spinner fa-spin"
	      })
	      return Object.assign({}, state, {
	      	isFetching: true,
	      	didInvalidate: false
	      })
	    case ANALYZE_FAILURE:
	      $("#overlay").LoadingOverlay("hide");
	      return  Object.assign({}, state, {
	      	isFetching: false,
	      	didInvalidate: true,
	      	error: action.error
	      })
	    case ANALYZE_SUCCESS:
	      $("#overlay").LoadingOverlay("hide");
	      return Object.assign({}, state, {
	      	isFetching: false,
	      	didInvalidate: false,
	      	results: action.results
	      })
	    default:
	      return state
	}
}