import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import TimeSeriesSubplot from './TimeSeriesSubplot'
import { timeSeriesDataAll, timeRecord } from '../../data.js'
import Scroll from 'react-scroll'
import { ADMIN_LOGIN, USER_LOGIN } from '../../actions'

import './time.css'

var Element = Scroll.Element;
var scroller = Scroll.scroller;
var admin = false

class TimeSeriesAdmin extends Component {
  constructor(props) {
    super(props)
    this.handleConfirm = this.handleConfirm.bind(this)
    this.handleUndoSelect = this.handleUndoSelect.bind(this)
    this.getPlainArray = this.getPlainArray.bind(this)
    this.handleSelectRecord = this.handleSelectRecord.bind(this)
    this.populateData = this.populateData.bind(this)
    this.submitSelect = this.submitSelect.bind(this)
    this.handleSummaryChange = this.handleSummaryChange.bind(this)
    this.healthReset = this.healthReset.bind(this)

    this.state = {
      plotAllData: null, 
      subData: [],                  /* Made of plain arrays */
      confirmedSelection: [],
      records: timeRecord,
      summary: "",
      health: {},
    }

    admin = props.admin             /* Hack to enable componentDidMount access admin */
  }

  handleConfirm() {
    var plotAllData = this.state.plotAllData
    var confirmedSelection = this.state.confirmedSelection
    if (confirmedSelection.length > 0 || plotAllData.selected().length === 0)
      return
    var initHealth = {}
    var data = plotAllData.data()
    for (var i = 0; i < data.length; i++) {
      initHealth[data[i].id] = true
    }
    this.setState({"health": initHealth})
    this.populateData()
  }

  handleUndoSelect() {
    var plotAllData = this.state.plotAllData
    plotAllData.unselect()
    this.setState({subData: [], confirmedSelection: []})
  }

  populateData(health) {
    var plotAllData = this.state.plotAllData
    var data = plotAllData.data()
    var subData = []
    var confirmedSelection = []
    // console.log(plotAllData.selected())
    for (var i = 0; i < data.length; i++){
      var dataId = data[i].id.split(' ').join('-')
      var dataSelected = plotAllData.selected(dataId)
      confirmedSelection.push(dataId)
      subData.push({
        data: this.getPlainArray(plotAllData.selected(data[i].id)),
        health: health? health[data[i].id]: true
      })
    }
    // console.log(subData, confirmedSelection)
    this.setState({subData: subData, confirmedSelection: confirmedSelection})
    scroller.scrollTo('time-series-subplot', {
      duration: 500,
      delay: 100,
      smooth: true,
    })
  }

  handleSelectRecord(record) {
    var self = this
    return function() {
      var plotAllData = self.state.plotAllData
      plotAllData.unselect()
      plotAllData.select([], Array.apply(null, Array(record.end - record.start)).map(function (_, i) {return i + record.start;}))
      self.populateData(record.dataHealth)
    }
  }

  /* Transform the selected data type to target plain array type */
  getPlainArray(selectedArray) {
    if (!selectedArray || selectedArray.length === 0)
      return []
    var plain = [selectedArray[0].id]
    for (var i = 0; i < selectedArray.length; i++) {
      plain.push(selectedArray[i].value)
    }
    return plain
  }

  healthReset(key, healthy) {
    var health = this.state.health
    health[key] = healthy
    console.log(health)
    this.setState({health: health})
  }

  submitSelect() {
    var plotAllData = this.state.plotAllData
    var selectedData = plotAllData.selected()
    timeRecord[Object.keys(timeRecord).length] = {
      author: "Wai Ip",
      summary: this.state.summary,
      start: selectedData[0].x,
      end: selectedData[selectedData.length - 1].x,
      dataHealth: this.state.health
    }
    this.setState({records: timeRecord})

    var timeInterval = 500
    scroller.scrollTo('time-series-all', {
      duration: timeInterval,
      delay: 100,
      smooth: true,
    })
    var self = this
    setTimeout(function() {
      self.handleUndoSelect()
    }, timeInterval)
  }

  handleSummaryChange(event) {
    this.setState({summary: event.target.value});
  }

  render() {
    this.props.login()
    var self = this
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
                    <Element name="time-series-all"></Element>
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
                    {
                      Object.keys(self.state.records).map(function(key, index) {
                        var record = self.state.records[key]
                        return (<TimeSeriesRecord key={index} id={index} summary={record.summary} author={record.author} onClick={self.handleSelectRecord(record)}/>)
                      })
                    }
                </div>
              </div>
            </div>
          </div>

          <div className="selected col-md-6">
            { self.props.admin? (
              <div>
                <div className="form-group">
                  <label>Comment on performance</label>
                  <textarea className="form-control" rows="3" placeholder="What's the performance issue with the selected period..." value={self.state.summary} onChange={self.handleSummaryChange}></textarea>
                </div>
                <button type="submit" className="btn btn-default" onClick={self.submitSelect}>Submit Button</button>
                <button type="reset" className="btn btn-default">Reset Button</button>
              </div>
              ): null
            }
          </div>
        </div>

        <br/>

        <TimeSeriesSubplot subData={this.state.subData} healthReset={this.healthReset}/>
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
    admin: state.admin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch({
        type: ADMIN_LOGIN
      })
    }
  }
}


class TimeSeriesRecord extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <a className="list-group-item" onClick={this.props.onClick}>
        <span className="badge"> {this.props.author} </span>
        <i className="fa fa-fw fa-comment"></i> 
        {" " + (this.props.summary.length > 50? this.props.summary.substring(0, 50) + "...": this.props.summary)}
      </a>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TimeSeriesAdmin)