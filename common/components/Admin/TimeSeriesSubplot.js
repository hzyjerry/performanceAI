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
    /*
    // Plug in used for switching subplot color
    $('.clickable').on('click',function(){
      var parent = $(this).closest(".panel")
      var title = $(this).siblings(".panel-title")
      var icon = parent.find('.panel-title > .fa')
      if (parent.hasClass('panel-green')) {
        parent.removeClass('panel-green').addClass('panel-red')
        title.html('<i class="fa fa-exclamation-triangle"></i> Unhealthy')
      } else {
        parent.removeClass('panel-red').addClass('panel-green')
        title.html('<i class="fa fa-check-circle"></i> Healthy')
      }
    })

    $( "div.selected" ).hide();
    $( "div.selected" ).fadeIn();

        // displayPlot()
    setTimeout(function() {
      $('.selected').goTo()
    }, 500)
    */
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
  }

  render() {
    return (
      <div className="col-md-6 breakdown" id="' + domBlockId + '">
        <div className="panel panel-green">
          <div className="panel-heading">
            <h3 className="panel-title"><i className="fa fa-check-circle"></i> Healthy</h3>
            <span className="pull-right clickable" data-effect="fadeOut"><i className="fa fa-thumb-tack"></i></span>
          </div>
          <div className="panel-body">
            <div className="plot" id={this.props.domId}></div>
          </div>
        </div>
      </div>
    )
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