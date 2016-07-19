import React from 'react'

class Summary extends React.Component {

  _renderChart(data) {
  	var chartTPS = c3.generate({
  		bindto: '#chartTPS',
	    data: {
	        columns: [
	            ['data1', 30, 200, 100, 400, 150, 250],
	            ['data2', 130, 100, 140, 200, 150, 50]
	        ],
	        type: 'spline'
	    }
	})

	var chartMemory = c3.generate({
  		bindto: '#chartMemory',
	    data: {
	        columns: [
	            ['data1', 30, 200, 100, 400, 150, 250],
	            ['data2', 130, 100, 140, 200, 150, 50]
	        ],
	        type: 'spline'
	    }
	})

	var chartNetwork = c3.generate({
  		bindto: '#chartNetwork',
	    data: {
	        columns: [
	            ['data1', 30, 200, 100, 400, 150, 250],
	            ['data2', 130, 100, 140, 200, 150, 50]
	        ],
	        type: 'spline'
	    }
	})

	var chartDisk = c3.generate({
  		bindto: '#chartDisk',
	    data: {
	        columns: [
	            ['data1', 30, 200, 100, 400, 150, 250],
	            ['data2', 130, 100, 140, 200, 150, 50]
	        ],
	        type: 'spline'
	    }
	})
  }

  render() {
  	return(
		<div className="row">
			<div className="col-lg-12">
			    <h1 className="page-header">
			        Summary <small>Analytics Overview</small>
			    </h1>
			    <div className="row">
					<div className="col-lg-6">
					    <ol className="breadcrumb">
					        <li className="active">
					            <i className="fa fa-dashboard"></i> Throughput/Delay
					        </li>
					    </ol>
					    <div id="chartTPS"></div>
					</div>
					<div className="col-lg-6">
					    <ol className="breadcrumb">
					        <li className="active">
					            <i className="fa fa-dashboard"></i> Network
					        </li>
					    </ol>
					    <div id="chartNetwork"></div>
					</div>
					<div className="col-lg-6">
					    <ol className="breadcrumb">
					        <li className="active">
					            <i className="fa fa-dashboard"></i> Memory
					        </li>
					    </ol>
					    <div id="chartMemory"></div>
					</div>
					<div className="col-lg-6">
					    <ol className="breadcrumb">
					        <li className="active">
					            <i className="fa fa-dashboard"></i> Disk
					        </li>
					    </ol>
					    <div id="chartDisk"></div>
					</div>
				</div>
			</div>
		</div>
    )
  }

  componentDidMount() {
  	var data
    this._renderChart(data)
  }

}

export default Summary
