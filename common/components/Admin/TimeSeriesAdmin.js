import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import setUpTime from './setUpTime'

class TimeSeriesAdmin extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><i className="fa fa-bar-chart-o"></i> Line Graph Example with Tooltips</h3>
              </div>
              <div className="panel-body">
                  <div className="flot-chart">
                      <div className="flot-chart-content" id="plot-all-data"></div>
                  </div>
                  <div className="text-center">
                    <div className="btn-toolbar">
                      <button type="button" className="btn btn-lg btn-warning center-block" id="unselect" style={{'float': 'right'}}>Unselect</button>
                      <button type="button" className="btn btn-lg btn-primary center-block" id="confirm-select" style={{'float': 'right'}}>Confirm</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <div className="selected row" id="plot-breakdown">
          <div className="col-md-6 col-md-offset-3">
            <div style={{"position": "absolute", "top": "0", "right": "0", "textAlign":"right"}}>
              <button type="button" className="btn btn-default btn-circle">
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="plot" id="plot2"></div>
          </div>
          <div className="col-md-6 col-md-offset-3">
            <div style={{"position": "absolute", "top": 0, "right": 0, "textAlign":"right"}}>
              <button type="button" className="btn btn-default btn-circle">
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div className="plot" id="plot3"></div>
          </div>

          <div className="col-md-6 col-md-offset-3">
            <div className="form-group">
              <label>Comment on performance</label>
              <textarea className="form-control" rows="3"></textarea>
              <button type="submit" className="btn btn-default">Submit Button</button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    setUpTime()
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

export default connect(mapStateToProps, mapDispatchToProps)(TimeSeriesAdmin)