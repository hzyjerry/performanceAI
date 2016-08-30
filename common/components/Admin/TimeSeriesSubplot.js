import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import setUpTime from './setUpTime'
import Scroll from 'react-scroll'

var Element = Scroll.Element;
var scroller = Scroll.scroller;

class TimeSeriesSubplot extends Component {
  constructor(props) {
    super(props)
    this.state = {
      subData: [],                  /* Made of plain arrays */
    }
  }

  render() {
    var subData = this.props.subData
    return (
      <div className="row" id="plot-breakdown">
        <Element name="time-series-subplot">
          {this.state.subData.map(function (data) {
            var dataId = data[0].split(' ').join('-')
            var domPlotId = 'plot-breakdown-' + dataId
            return (
              <TimeSeriesSubplotSnippet data={data} domId={domPlotId} key={dataId}/>
            )
          })}
        </Element>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({subData: nextProps.subData})
  }

  componentDidMount() {
  }
}

class TimeSeriesSubplotSnippet extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      healthy: true,
      icon: "fa fa-check-circle",
      panel: "panel panel-green",
      title: " Healthy"
    }
  }

  render() {
    return (
      <div className="col-md-6 breakdown">
        <div className={this.state.panel}>
          <div className="panel-heading">
            <h3 className="panel-title"><i className={this.state.icon}></i> {this.state.title}</h3>
            <span className="pull-right clickable" data-effect="fadeOut" onClick={this.handleClick}><i className="fa fa-thumb-tack"></i></span>
          </div>
          <div className="panel-body">
            <div className="plot" id={this.props.domId}></div>
          </div>
        </div>
      </div>
    )
  }

  handleClick() {
    // Plug in used for switching subplot color
    var state = this.state
    if (state.healthy) {
      state = {
        healthy: false,
        icon: "fa fa-exclamation-triangle",
        panel: "panel panel-red",
        title: " Unhealthy"
      }
    } else {
      state = {
        healthy: true,
        icon: "fa fa-check-circle",
        panel: "panel panel-green",
        title: " Healthy"
      }
    }
    this.setState(state)
  }

  componentDidMount() {
    var domPlotId = this.props.domId
    var data = this.props.data
    var newChart = c3.generate({
        data: {
            columns: [
                data
            ],
            type: 'spline'
        },
        axis: {
          y: {
            tick: {
              format: d3.format('.4')
            }
          }
        }
    });
    $("#" + domPlotId).append(newChart.element)
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

export default connect(mapStateToProps, mapDispatchToProps)(TimeSeriesSubplot)