import React from 'react'
import { Link } from 'react-router'

class Memory extends React.Component {

    _renderChart(data) {
	  	var chartMemory = c3.generate({
	  		bindto: '#chartMemory',
		    data: {
		        columns: [
		            ['data1', 30, 200, 100, 400, 150, 250, 380, 400, 390, 400, 390, 400, 390, 400, 390, 400, 390, 400],
		            ['data2', 130, 100, 140, 200, 150, 50, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40, 30, 40]
		        ],
		        type: 'spline'
		    }
		})

		this.chart = chartMemory
		this.chart.originalColors = jQuery.extend(true, {}, chartMemory.data.colors())
	}

  render() {
    return (
		<div className="row">
			<div className="col-lg-12">
			    <h1 className="page-header">
			        Memory <small>Analytics Detail</small>
			    </h1>
			    <div className="row">
					<div className="col-lg-12">
                        <div className="panel panel-green">
                            <div className="panel-heading">
                                <h3 className="panel-title">Diagnostics</h3>
                            </div>
                            <div className="panel-body">
                                No issues with memory performance. Looks like everything is good to go.
                                <br/>
                                <br/>
                                <br/>
                                <div className="col-lg-9">
								    <ol className="breadcrumb">
								        <li className="active">
								            <i className="fa fa-dashboard"></i> Memory
								        </li>
								    </ol>
								    <div id="chartMemory"></div>
								</div>
								<div className="col-lg-3">
								    <ol className="breadcrumb">
								        <li className="active">
								            <i className="fa fa-dashboard"></i> Issues
								        </li>
								    </ol>
								    <div className="list-group">
                                    <Link to="/tps" message={"Abnormal dip in performance"} onClick={function() {
                                    	self.chart.defocus();
										self.chart.focus();
										self.chart.unzoom();
										self.chart.data.colors(self.chart.originalColors)
										self.setState({
											show1: false,
											show2: false
										})
                                    }} className="list-group-item">
                                        <i className="fa fa-fw fa-calendar"></i> No Issues Here
                                    </Link>
                                </div>
								    <div id="chartTPS"></div>
								</div>
								<div className="col-lg-9">
									{this.props.children}
					            </div>
                            </div>
                        </div>
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

export default Memory
