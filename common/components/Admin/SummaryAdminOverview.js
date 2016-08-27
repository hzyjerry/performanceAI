import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import setUpOverview from './setUpOverview'

class SummaryAdminOverview extends Component {
  render() {
    console.log(123)
    return (
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
                          <div className="donut overview" id="cpu-util"></div>
                      </div>
                      <div className="col-md-6">
                          <div className="donut overview" id="cpu-iowait"></div>
                      </div>
                  </div>
              </div>
              <div className="col-md-4">
                  <div className="panel-heading">
                      <h3 className="page-header" style={{"margin":"20px 0 10px"}}>Memory Performance</h3>
                  </div>
                  <div className="panel-body">
                      <div className="col-md-12">
                          <div className="donut overview" id="mem-used"></div>
                      </div>
                  </div>
              </div>
              <div className="col-md-6">
                  <div className="panel-heading">
                      <h3 className="page-header" style={{"margin":"20px 0 10px"}}>Disk Response</h3>
                  </div>
                  <div className="panel-body">
                      <div className="col-md-12">
                          <div className="chart overview" id="disk-response-overview" style={{width: "500px",height: "230px"}}></div>
                      </div>
                  </div>
              </div>

              <div className="col-md-4">
                  <div className="panel-heading">
                      <h3 className="page-header" style={{"margin":"20px 0 10px"}}>Disk Utility</h3>
                  </div>
                  <div className="panel-body">
                      <div className="col-md-12">
                          <div className="donut overview" id="disk-util"></div>
                      </div>
                  </div>
              </div>
              <div className="col-md-12">
                  <div className="panel-heading">
                      <h3 className="page-header" style={{"margin":"20px 0 10px"}}>Time Series</h3>
                  </div>
                  <div className="panel-body">
                      <div className="col-md-10">
                          <div className="chart overview" id="aggregate"></div>
                      </div>
                  </div>
              </div>
          </div> 
    </div>
    )
  }

  componentDidMount() {
    setUpOverview()
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(SummaryAdminOverview)