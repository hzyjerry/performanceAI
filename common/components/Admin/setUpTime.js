var data = {
  'time_series_columns': [
    ['CPU Usage', 8,3.96,3.03,4,3.03,4,3.03,2,45.62,87.95,43.56,61.54,55.64,61.21,56.25,72.16,49.65,60.83,57.38,56.1,80,45.75,56.56,57.5,87.5,44.79,58.07,60,60.66,55.9,58.54,62.28,58.69,55.12,47.42,36.61,29.57,12.38,14.42,59.42,60,58.06,58.69,58.87,60.83,63.39,51.88,65.22,52.71,58.88,59.16,57.02,78.72,45.75,58.33,91.03,53.03,63.06,43.97,58.68,72.16,63.39,57.38,46.76,58.33,64.04,63.89,48.61,63.48,63.06,53.24,63.96,55.04,55.91,61.34,54.69,59.02,58.53,93.59,58.54,45.86,77.52,58.68,42.68,58.54,58.34,86.59,43.75,61.02,59.02,74.73,45.4,64.87,65.71,58.53,58.73,48.05,22.81,28.86,55.47,68.57,71.72,48.3,57.38,57.72,52.63,62.73,57.5,84.52,44.3,57.14,58.06,57.73,56.8,58.54,90.91,58.33,50,48.32,88.75,58.07,58.4,43.13,7,4,5,12.87,6,34.07,73.68,53.43,58.27,46.06,58.53,76.09,47.37,81.61,55.04,57.72,50,67.31,49.3,59.02,67.31,58.87,53.91,62.39,58.07,56.56,58.53,54.01,41.59,6.93,4,4,2.04,2.86,2.91,35.13,57.9,59.02,59.17,57.6,89.61,58.54,42.59,58.2,64.28,80,58.72,42.85,58.68,58.4,68.62,66.98,58.4,65.74,51.45,56.91,56.8,46.53,9.8,12.87,5.94,3.03,5.05,15.68,4.08,37.08,56.2,52.49,67.28,57.73,77.09,45.81,57.14,56.91,55.82,60.87,59.67,55.47,59.02,57.85,76.66,62.07,45.29,93.42,55.73,60.17,56.56,43.76,28.83,3.06,6.93,7.07,4,6.66,9.26,53.06,54.29,51.52,61.87,71.87,58.82,45.7,75,51.05,54.68,71.29,50.71,59.66,56.25,66.04,51.85,58.4,65.74,57.26,54.08,58.53,61.21,55.82,58.33,36.36,5.15,6,4,6,7.14,40.87,94.73,44.57,56.69,67.96,50.36,58.87,71.29,49.65,58.68,80.68,52.63,49.29,76.93,56.67,57.14,48.28,72.73,57.38,57.38,51.41,67.59,53.85,53.9,66.98,38.64,4,5.82,7.62,4.9,52.25,53.39,63.79,54.33,57.38,57.62,59.02,57.98,57.98,56.91,59.2,58.82,57.98,57.5,58.33,84.71,44.58,81.61,44.3,58.33,60.68,55.2,69.23,50,57.73,49.57,4.95,5,3.03,3,67.09,53.28,50,71.57,49.3],
    ['Memory Usage', 62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.39,62.39,62.39,62.39,62.41,62.41,62.41,62.48,62.57,62.57,62.57,62.60,62.60,62.60,62.60,62.60,62.60,62.64,62.65,62.65,62.66,62.67,62.69,62.78,62.80,62.92,62.78,62.78,62.78,62.78,62.78,62.77,62.78,62.78,62.78,62.78,62.78,62.78,62.78,62.82,62.82,62.82,62.82,62.83,62.84,62.84,62.84,62.85,62.85,62.85,62.85,62.86,62.86,62.92,62.96,62.96,62.96,62.97,62.97,62.97,62.97,62.97,62.97,62.97,62.99,63.04,63.04,63.04,63.04,63.04,63.04,63.04,63.04,63.08,63.08,63.08,63.08,63.09,63.10,63.10,63.10,63.12,63.12,63.12,63.12,63.15,63.17,63.17,63.17,63.17,63.17,63.19,63.19,63.19,63.22,63.22,63.22,63.22,63.26,63.26,63.26,63.26,63.27,63.27,63.27,63.27,63.29,63.29,63.29,63.29,63.29,63.31,63.32,63.32,63.32,63.33,63.33,63.33,63.33,63.33,63.33,63.33,63.33,63.33,63.35,63.36,63.36,63.36,63.37,63.37,63.37,63.37,63.37,63.37,63.39,63.39,63.39,63.40,63.40,63.40,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.43,63.43,63.43,63.43,63.43,63.43,63.43,63.43,63.45,63.45,63.45,63.45,63.45,63.45,63.45,63.46,63.46,63.47,63.47,63.47,63.47,63.48,63.48,63.48,63.48,63.48,63.48,63.49,63.49,63.49,63.49,63.49,63.49,63.49,63.50,63.50,63.50,63.50,63.50,63.50,63.50,63.51,63.51,63.51,63.51,63.52,63.53,63.53,63.53,63.53,63.53,63.53,63.53,63.54,63.54,63.54,63.54,63.55,63.55,63.57,63.57,63.57,63.56,63.56,63.59,63.60,63.60,63.60,63.60,63.63,63.63,63.63,63.65,63.65,63.65,63.65,63.65,63.67,63.68,63.68,63.68,63.68,63.69,63.70,63.70,63.70,63.70,63.71,63.71,63.71,63.72,63.74,63.74,63.74,63.74,63.74,63.74,63.74,63.74,63.75,63.75,63.76,63.75,63.76,63.82,63.82,63.82,63.82,63.90,63.90,63.90,63.90,63.90,63.90,63.90,63.90,63.90,63.94,63.94,63.94,63.94,63.96,63.96,63.96,63.96,63.96,63.96,63.96,63.97,64.04,64.04,64.04,64.04,64.05,64.05,64.06,64.07,64.07,64.12,64.12,64.12,64.12,64.12,64.12,64.12,64.12,64.12,64.12],
  ]
}

function getSetupFunction(data) {

  // Transform the selected data type to target plain array type
  function getPlainArray(selectedArray) {
    if (!selectedArray || selectedArray.length === 0)
      return []
    var plain = [selectedArray[0].id]
    for (var i = 0; i < selectedArray.length; i++) {
      plain.push(selectedArray[i].value)
    }
    return plain
  }

  return function() {
    // Plug in used for slow scrolling
    (function($) {
        $.fn.goTo = function() {
            $('html, body').animate({
                scrollTop: $(this).offset().top + 'px'
            }, 'slow');
            return this; // for chaining...
        }
    })(jQuery);

    // Plug in used for switching subplot color
    jQuery(function(){
      $('.clickable').on('click',function(){
          var parent = $(this).parent().parent()
          if (parent.hasClass('panel-green')) {
            parent.removeClass('panel-green', 300).addClass('panel-red', 300)
          } else {
            parent.removeClass('panel-red', 300).addClass('panel-green', 300)
          }
          // var effect = $(this).data('effect');
          //    $(this).closest('.panel')[effect]();
        })
      })

    // Data selection code
    var selected = []

    function isEqual(newSelect) {
      if (selected.length !== newSelect.length) {
        return false
      } else {
        for (var i = 0; i < selected.length; i++) {
          if (selected[i].id !== newSelect[i].id || selected[i].index !== newSelect[i].index ||
            selected[i].value !== newSelect[i].value) {
            return false
          }
        }
        return true
      }
    }

    var plotAllData = c3.generate({
        bindto: "#plot-all-data",
        data: {
            columns: data.time_series_columns,
            type: 'spline',
            selection: {
                enabled: true,
                draggable: true,
                grouped: true
            }
        },
        axis: {
          y: {
            tick: {
              format: d3.format('.4')
            }
          }
        }
    });

    var confirmedSelection = []

    function confirmSelect() {
      if (confirmedSelection.length > 0 || plotAllData.selected().length === 0)
        return

      var allData = plotAllData.data()
      for (var i = 0; i < allData.length; i++){
        var dataId = allData[i].id.split(' ').join('-')
        var dataSelected = plotAllData.selected(dataId)
        var domPlotId = 'plot-breakdown-' + dataId
        var domBlockId = 'block-' + dataId
        $("#plot-breakdown").append('\
          <div class="col-md-6" id="' + domBlockId + '">\
            <div class="panel panel-green">\
              <div class="panel-heading">\
                <h3 class="panel-title"><i class="fa fa-long-arrow-right"></i>Using Fade Out</h3>\
                <!-- Watch Out: Here We must use the effect name in the data tag-->\
                <span class="pull-right clickable" data-effect="fadeOut"><i class="fa fa-thumb-tack"></i></span>\
              </div>\
            <div class="panel-body">\
              <div class="plot" id="' + domPlotId + '"></div>\
            </div>\
          </div>\
          ')
        confirmedSelection.push(dataId)

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
        $("#" + domPlotId).append(newChart.element)
      }

      $( "div.selected" ).hide();
      $( "div.selected" ).fadeIn();

      // displayPlot()
      setTimeout(function() {
        $('.selected').goTo()
      }, 500)
    }

    function undoSelect() {
      $( "div.selected" ).fadeOut(function done() {
        for (var i = 0; i < confirmedSelection.length; i++) {
          var dataId = confirmedSelection[i]
          var domPlotId = 'plot-breakdown-' + dataId
          var domBlockId = 'block-' + dataId
          $('#' + domPlotId).children().remove()
          $('#' + domBlockId).remove()
        }
        plotAllData.unselect()
        confirmedSelection = []
      });
    }

    $("#confirm-select").click(confirmSelect)
    $("#unselect").click(undoSelect)

    function displayPlot() {
      if ( $( "div.selected" ).is( ":hidden" ) ) {
        $( "div.selected" ).slideDown( "slow" );
      };
    }

    $( "div.selected" ).hide();
  }
}

export default getSetupFunction(data)