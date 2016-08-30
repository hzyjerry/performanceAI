import React, {PropTypes, Component} from 'react'
import { connect } from 'react-redux'
import setUpTime from './setUpTime'

class TimeSeriesSubplot extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    /*
      $("#plot-breakdown").append('\
        <div class="col-md-6 breakdown" id="' + domBlockId + '">\
          <div class="panel panel-green">\
            <div class="panel-heading">\
              <h3 class="panel-title"><i class="fa fa-check-circle"></i> Healthy</h3>\
              <!-- Watch Out: Here We must use the effect name in the data tag-->\
              <span class="pull-right clickable" data-effect="fadeOut"><i class="fa fa-thumb-tack"></i></span>\
            </div>\
          <div class="panel-body">\
            <div class="plot" id="' + domPlotId + '"></div>\
          </div>\
        </div>\
        ')
                $("#" + domPlotId).append(newChart.element)

      var newData = allData[i]
      var newChart = c3.generate({
          data: {
              columns: [
                  getPlainArray(plotAllData.selected(allData[i].id))
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

    return (
      <div className="row" id="plot-breakdown">
        {this.props.subData.map((data) =>
          <h> data </h>
        )}
      </div>
    )
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
      <div className="row" id="plot-breakdown">
      </div>
    )
  }

  componentDidMount() {
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