import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import setUpTime from './setUpTime'

import './time.css'

class TimeSeriesAdmin extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title"><i className="fa fa-bar-chart-o"></i> Aggregated Plot </h3>
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
        <div className="row" id="plot-breakdown">
          <div className="col-md-6" id="">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title"><i className="fa fa-long-arrow-right"></i>Healthy</h3>
                <span className="pull-right clickable" data-effect="fadeOut"><i className="fa fa-thumb-tack"></i></span>
              </div>
              <div className="panel-body">
                <div className="plot" id="' + domPlotId + '"></div>
              </div>
            </div>
          </div>

          <div className="selected col-md-6">
            <div className="form-group">
              <label>Comment on performance</label>
              <textarea className="form-control" rows="3" placeholder="What's the performance issue with the selected period..."></textarea>
            </div>
            <button type="submit" className="btn btn-default">Submit Button</button>
            <button type="reset" className="btn btn-default">Reset Button</button>
          </div>

          <br/>
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