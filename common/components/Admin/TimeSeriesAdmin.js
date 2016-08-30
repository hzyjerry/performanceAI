import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import TimeSeriesSubplot from './TimeSeriesSubplot'
import { timeSeriesDataAll } from '../../data.js'

import './time.css'

class TimeSeriesAdmin extends Component {
  constructor(props) {
    super(props)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleUndoSelect = this.handleUndoSelect.bind(this)

    this.state = {
      plotAllData: null, 
      subData: [],                  /* Made of plain arrays */
      confirmedSelection: []
    }
  }

  handleConfirm() {
    var plotAllData = this.state.plotAllData
    var confirmedSelection = this.state.confirmedSelection
    if (confirmedSelection.length > 0 || plotAllData.selected().length === 0)
      return
    var allData = plotAllData.data()
    var subData = []
    for (var i = 0; i < allData.length; i++){
      var dataId = allData[i].id.split(' ').join('-')
      var dataSelected = plotAllData.selected(dataId)
      confirmedSelection.push(dataId)

      // var domPlotId = 'plot-breakdown-' + dataId
      // var domBlockId = 'block-' + dataId
      subData.push(getPlainArray(plotAllData.selected(allData[i].id)))
    }
    this.setState({subData: subData, confirmedSelection: confirmedSelection})
  }

  handleUndoSelect() {
    this.setState({subData: [], confirmedSelection: []})
  }

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
                      <button type="button" className="btn btn-lg btn-warning center-block" id="unselect" style={{'float': 'right'}} onClick={this.handleUndoSelect}>Unselect</button>
                      <button type="button" className="btn btn-lg btn-primary center-block" id="confirm-select" style={{'float': 'right'}} onClick={this.handleConfirm}>Confirm</button>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row" id="plot-macro">
          <div className="col-md-6" id="">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title"><i className="fa fa-bars"></i> List of Problems</h3>
              </div>
              <div className="panel-body">
                <div className="list-group">
                    <a href="#" className="list-group-item">
                        <span className="badge">System</span>
                        <i className="fa fa-fw fa-calendar"></i> CPU Abnormal Dip
                    </a>
                    <a href="#" className="list-group-item">
                        <span className="badge">System</span>
                        <i className="fa fa-fw fa-calendar"></i> CPU Abnormal Spike
                    </a>
                    <a href="#" className="list-group-item">
                        <span className="badge">Wai Ip</span>
                        <i className="fa fa-fw fa-money"></i> Potential Memory Leak
                    </a>
                    <a href="#" className="list-group-item">
                        <span className="badge">Wai Ip</span>
                        <i className="fa fa-fw fa-user"></i> Paging Issue
                    </a>
                    <a href="#" className="list-group-item">
                        <span className="badge">Naseem</span>
                        <i className="fa fa-fw fa-truck"></i> Memory Issue
                    </a>
                    <a href="#" className="list-group-item">
                        <span className="badge">Lucianno</span>
                        <i className="fa fa-fw fa-comment"></i> GC Issue
                    </a>
                </div>
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
        </div>

        <br/>

        <TimeSeriesSubplot subData={this.state.subData}/>
      </div>
    )
  }

  componentDidMount() {
    var formattedData = {}
    var needSecondAxis
    (function formatInputData(data) {
      formattedData.time_series_columns = []
      formattedData.axes = {}
      needSecondAxis = false
      for (var i = 0; i < data.length; i++) {
        var entry = data[i]
        if (entry.percentage) {
          formattedData.axes[entry.name] = 'y'
        } else {
          formattedData.axes[entry.name] = 'y2'
          needSecondAxis = true
        }
        var dataArray = entry.data
        dataArray.unshift(entry.name)
        formattedData.time_series_columns.push(dataArray)
      }
    })(timeSeriesDataAll)
    
    var plotAllData = c3.generate({
        bindto: "#plot-all-data",
        data: {
            columns: formattedData.time_series_columns,
            type: 'spline',
            selection: {
                enabled: true,
                draggable: true,
                grouped: true
            },
            axes: formattedData.axes
        },
        axis: {
          y: {
            tick: {
              format: d3.format('.4')
            }
          },
          y2: {
            show: needSecondAxis
          }
        }
    });
    this.setState({plotAllData: plotAllData})
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