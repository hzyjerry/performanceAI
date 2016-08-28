import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import setUpTime from './setUpTime'

class TimeSeriesAdmin extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="plot" id="plot" style={{"height": "600px"}}></div>
          </div>
        </div>
        <br/>
        <div className="row">
          <div className="col-md-2 col-md-offset-5">
            <button type="button" className="btn btn-lg btn-primary" id="confirm-select" onclick="confirmSelect()">Confirm</button>
            <button type="button" className="btn btn-lg btn-warning" id="unselect" onclick="undoSelect()">Unselect</button>
          </div>
        </div>
        <div className="selected row">
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