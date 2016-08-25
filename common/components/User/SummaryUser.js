import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import {setUpDonut} from '../donut'
import {setUpChart} from '../chart'

class SummaryUser extends Component {
  render() {
    const { onClick } = this.props
    return (
      <div>
        <div className="row">
            <div className="col-lg-12">
                <h1 className="page-header">
                    Analytics Summary <small>Benchmark APIPlatform Build #400</small>
                </h1>
            </div>
        </div>

        <div className="jumbotron">
            <h2>Bottleneck: CPU Bound</h2>
            <p>There were a few dips and spikes, caused by disk flush for the dirty pages, resulted in intermittent long gc pauses. The impact of these spikes and dips were minimal, and could be smoothed out if switched to CMS GC. 
            Recommended to review application for excessive disk writes. </p>
            <p><a href="#" className="btn btn-primary btn-lg" role="button">Learn more &raquo;</a>
            </p>
        </div>
        <div>

          <ul className="nav nav-tabs" role="tablist">
            <li role="presentation" className="active"><a href="#overview" aria-controls="home" role="tab" data-toggle="tab"> Overview </a></li>
            <li role="presentation"><a href="#detailed" aria-controls="profile" role="tab" data-toggle="tab"> Detailed </a></li>
          </ul>

          <br/> 

          <div className="tab-content">
            <div role="tabpanel" className="tab-pane fade in active" id="overview">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <ol className="breadcrumb" style={{"marginBottom":0,"padding":0}}>
                                <li>
                                    <i className="fa fa-dashboard"></i>  <a href="index.html">Benchmark APIPlatform Build #400</a>
                                </li>
                                <li className="active">
                                    <i className="fa fa-desktop"></i> 10.0.1.221_monQuery
                                </li>
                            </ol>
                    </div>
                    <div className="panel-body">
                        <div className="col-md-6">
                            <div className="panel-heading">
                                <h3 className="page-header" style={{"margin":"20px 0 10px"}}>CPU Performance</h3>
                            </div>
                            <div className="panel-body">
                                <div className="col-md-6">
                                    <div className="donut" id="cpu_chart1"></div>
                                </div>
                                <div className="col-md-6">
                                    <div className="donut" id="cpu_chart2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="panel-heading">
                                <h3 className="page-header" style={{"margin":"20px 0 10px"}}>Memory Performance</h3>
                            </div>
                            <div className="panel-body">
                                <div className="col-md-12">
                                    <div className="donut" id="mem_chart1"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="panel-heading">
                                <h3 className="page-header" style={{"margin":"20px 0 10px"}}>Disk Response</h3>
                            </div>
                            <div className="panel-body">
                                <div className="col-md-12">
                                    <div className="chart" id="disk_chart1" style={{width: "500px",height: "230px"}}></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="panel-heading">
                                <h3 className="page-header" style={{"margin":"20px 0 10px"}}>Disk Utility</h3>
                            </div>
                            <div className="panel-body">
                                <div className="col-md-12">
                                    <div className="donut" id="disk_chart2"></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="panel-heading">
                                <h3 className="page-header" style={{"margin":"20px 0 10px"}}>Time Series</h3>
                            </div>
                            <div className="panel-body">
                                <div className="col-md-10">
                                    <div className="chart overview-chart" id="overview-chart"></div>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            <div role="tabpanel" className="tab-pane fade" id="detailed">
              <div className="panel panel-default">
                  <div className="panel-heading">
                      <ol className="breadcrumb" style={{"marginBottom":0,"padding":0}}>
                              <li>
                                  <i className="fa fa-dashboard"></i>  <a href="index.html">Benchmark APIPlatform Build #400</a>
                              </li>
                              <li className="active">
                                  <i className="fa fa-desktop"></i> 10.0.1.221_monQuery
                              </li>
                          </ol>
                  </div>
                  <div className="panel-body">
                      <div className="col-md-6">
                          <div className="panel-heading">
                              <h3 className="page-header" style={{"margin":"20px 0 10px"}}>CPU Performance</h3>
                          </div>
                          <div className="panel-body">
                              <div className="col-md-6">
                                  <div className="donut" id="cpu_chart1_detail"></div>
                              </div>
                              <div className="col-md-6">
                                  <div className="donut" id="cpu_chart2_detail"></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-4">
                          <div className="panel-heading">
                              <h3 className="page-header" style={{"margin":"20px 0 10px"}}>Memory Performance</h3>
                          </div>
                          <div className="panel-body">
                              <div className="col-md-12">
                                  <div className="donut" id="mem_chart1_detail"></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-6">
                          <div className="panel-heading">
                              <h3 className="page-header" style={{"margin":"20px 0 10px"}}>Disk Response</h3>
                          </div>
                          <div className="panel-body">
                              <div className="col-md-12">
                                  <div className="chart" id="disk_chart1_detail" style={{width: "500px",height: "230px"}}></div>
                              </div>
                          </div>
                      </div>

                      <div className="col-md-4">
                          <div className="panel-heading">
                              <h3 className="page-header" style={{"margin":"20px 0 10px"}}>Disk Utility</h3>
                          </div>
                          <div className="panel-body">
                              <div className="col-md-12">
                                  <div className="donut" id="disk_chart2_detail"></div>
                              </div>
                          </div>
                      </div>
                      <div className="col-md-12">
                          <div className="panel-heading">
                              <h3 className="page-header" style={{"margin":"20px 0 10px"}}>Time Series</h3>
                          </div>
                          <div className="panel-body">
                              <div className="col-md-10">
                                  <div className="chart overview-chart" id="overview-chart_detail"></div>
                              </div>
                          </div>
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
    setUpDonut()
    setUpChart()
    console.log(123)
  }
}

SummaryUser.propTypes = {
  onClick: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (props) => {
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SummaryUser)