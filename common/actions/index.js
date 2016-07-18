export const SET_COUNTER = 'SET_COUNTER'
export const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
export const UPLOAD = 'UPLOAD'
export const ANALYZE_REQUEST = 'ANALYZE_REQUEST'
export const ANALYZE_FAILURE = 'ANALYZE_FAILURE'
export const ANALYZE_SUCCESS = 'ANALYZE_SUCCESS'

var request = require('superagent');


/* Notify all the app components that file has been successfully uploaded, analyzed
   and received 
*/
function upload() {
  return {
    type: UPLOAD,
  }
}

function analyzeRequest() {
  return {
    type: ANALYZE_REQUEST,
  }
}

function analyzeReceive(res) {
  return {
    type: ANALYZE_SUCCESS,
    results: res.results
  }
}

function analyzeFailure(res) {
  return {
    type: ANALYZE_FAILURE,
    error: res.error
  }
}

export function analyzeFiles() {
  return function (dispatch) {
    dispatch(analyzeRequest())
    return request
      .post('/upload')
      .send({ name: 'Manny', species: 'cat' })
      .set('Accept', 'application/json')
      .end(function(err, res) {
        if (err) {
          // Connection error
          dispatch(analyzeFailure(err))
        } else if (res.body.err) {
          dispatch(analyzeFailure(res.body))
        } else {
          dispatch(analyzeReceive(res.body))
          dispatch(upload())
        }
      });
  }
}