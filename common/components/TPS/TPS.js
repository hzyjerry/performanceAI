import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class TPS extends React.Component {

    _renderChart(data) {
	  	var chartTPS = c3.generate({
	  		bindto: '#chartMemory',
		    data: {
		        columns: [
		            ['data1', 30, 200, 100, 400, 150, 250, 200, 180, 200, 180, 200, 180, 200, 180, 200, 180],
	            	['data2', 130, 100, 140, 200, 150, 50, 200, 150, 200, 150, 200, 150, 200, 150, 200, 150]
		        ],
		        type: 'spline'
		    }
		})

		this.chart = chartTPS
		this.chart.originalColors = jQuery.extend(true, {}, chartTPS.data.colors())
	}

  render() {
  	self = this
    return (
		<div className="row">
			<div className="col-lg-12">
			    <h1 className="page-header">
			        Throughput/Delay <small>Analytics Detail</small>
			    </h1>
			    <div className="row">
					<div className="col-lg-12">
                        <div className="panel panel-red">
                            <div className="panel-heading">
                                <h3 className="panel-title">Diagnostics</h3>
                            </div>
                            <div className="panel-body">
                                These data dimensions suggest the application is memory bound, indicated by the increasing memory consumption and high GC stall, also confirmed by increasing # of major page fault. Other resources are underutilized in general.
                                <br/>
                                <br/>
                                <br/>
                                <div className="col-lg-9">
								    <ol className="breadcrumb">
								        <li className="active">
								            <i className="fa fa-dashboard"></i> Throughput/Delay
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
                                    <Link to="/tps/1" onClick={function() {
                                    	self.setState({
											show1: true,
											show2: false
										})
										self.chart.focus('data1');
										self.chart.zoom([1,4]);
										self.chart.data.colors({
										  data1: '#FF0000'
										});}} className="list-group-item">
                                        <span className="badge">4 minutes ago</span>
                                        <i className="fa fa-fw fa-comment"></i> Issue 1
                                    </Link>
                                    <Link to="/tps/2" message={"Abnormal bump in performance"} onClick={function() {
                                    	self.setState({
											show1: false,
											show2: true
										})
                                    	self.chart.focus('data1');
										self.chart.zoom([3,6]);
										self.chart.data.colors({
										  data1: '#FF0000'
										});
                                    }} className="list-group-item">
                                        <span className="badge">3 minutes ago</span>
                                        <i className="fa fa-fw fa-comment"></i> Issue 2
                                    </Link>
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
                                        <i className="fa fa-fw fa-calendar"></i> Original
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

const mapStateToProps = (state) => {
  return {    
  	show1: state.show1,
  	show2: state.show2
  }
}

export default connect(mapStateToProps)(TPS)
