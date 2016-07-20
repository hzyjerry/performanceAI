import React from 'react'
import { Link } from 'react-router'

class Summary extends React.Component {

  _renderChart(data) {
  	var chartTPS = c3.generate({
  		bindto: '#chartTPS',
	    data: {
	        columns: [
	            ['data1', 30, 200, 100, 400, 150, 250, 380, 400, 390, 400, 390, 400, 390, 400, 390, 400, 390, 400],
	            ['data2', 130, 100, 140, 200, 150, 50, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40]
	        ],
	        type: 'spline'
	    }
	})

	var chartMemory = c3.generate({
  		bindto: '#chartMemory',
	    data: {
	        columns: [
	            ['data1', 30, 200, 100, 400, 150, 250, 200, 180, 200, 180, 200, 180, 200, 180, 200, 180],
	            ['data2', 130, 100, 140, 200, 150, 50, 200, 150, 200, 150, 200, 150, 200, 150, 200, 150]
	        ],
	        type: 'spline'
	    }
	})

	var chartNetwork = c3.generate({
  		bindto: '#chartNetwork',
	    data: {
	        columns: [
	            ['data1', 30, 200, 100, 400, 150, 250, 400, 150, 250, 400, 150, 250, 400, 150, 250],
	            ['data2', 130, 100, 140, 200, 150, 50, 200, 150, 150, 200, 150, 150, 200, 150, 150]
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
					<div className="col-lg-12">
                        <div className="panel panel-danger">
                            <div className="panel-heading">
                                <h3 className="panel-title">Analytics Summary</h3>
                            </div>
                            <div className="panel-body">
                                These data dimensions suggest the application is memory bound, indicated by the increasing memory consumption and high GC stall, also confirmed by increasing # of major page fault. Other resources are underutilized in general.
                            </div>
                        </div>
                    </div>
					<div className="col-lg-6">
						<Link to="/tps">
						    <ol className="breadcrumb">
						        <li className="active">
						            <i className="fa fa-dashboard"></i> Throughput/Delay
						        </li>
						    </ol>
						    <div id="chartTPS"></div>
						</Link>
					</div>
					<div className="col-lg-6">
						<Link to="/network">
						    <ol className="breadcrumb">
						        <li className="active">
						            <i className="fa fa-dashboard"></i> Network
						        </li>
						    </ol>
						    <div id="chartNetwork"></div>
						</Link>
					</div>
					<div className="col-lg-6">
						<Link to="/memory">
						    <ol className="breadcrumb">
						        <li className="active">
						            <i className="fa fa-dashboard"></i> Memory
						        </li>
						    </ol>
					    	<div id="chartMemory"></div>
					    </Link>
					</div>
					<div className="col-lg-6">
						<Link to="/disk">
						    <ol className="breadcrumb">
						        <li className="active">
						            <i className="fa fa-dashboard"></i> Disk
						        </li>
						    </ol>
						    <div id="chartDisk"></div>
						</Link>
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
