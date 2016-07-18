/**	Application State
 	uploadedFile: boolean, whether or not file has been uploaded
 	analyzedResult:
	 	isFetching: boolean, whether or not fetching results
	    didInvalidate: boolean, whether or not error occured
	    results: {
			memory: {}
			network: {}
			tps: {}				
 		}
 		error: {}
 */

export uploadedFile from './uploadedFile'
export analyzedResult from './analyzedResult'