var data = [
  {
    name: 'CPU Usage',
    percentage: true,
    data: [8,3.96,3.03,4,3.03,4,3.03,2,45.62,87.95,43.56,61.54,55.64,61.21,56.25,72.16,49.65,60.83,57.38,56.1,80,45.75,56.56,57.5,87.5,44.79,58.07,60,60.66,55.9,58.54,62.28,58.69,55.12,47.42,36.61,29.57,12.38,14.42,59.42,60,58.06,58.69,58.87,60.83,63.39,51.88,65.22,52.71,58.88,59.16,57.02,78.72,45.75,58.33,91.03,53.03,63.06,43.97,58.68,72.16,63.39,57.38,46.76,58.33,64.04,63.89,48.61,63.48,63.06,53.24,63.96,55.04,55.91,61.34,54.69,59.02,58.53,93.59,58.54,45.86,77.52,58.68,42.68,58.54,58.34,86.59,43.75,61.02,59.02,74.73,45.4,64.87,65.71,58.53,58.73,48.05,22.81,28.86,55.47,68.57,71.72,48.3,57.38,57.72,52.63,62.73,57.5,84.52,44.3,57.14,58.06,57.73,56.8,58.54,90.91,58.33,50,48.32,88.75,58.07,58.4,43.13,7,4,5,12.87,6,34.07,73.68,53.43,58.27,46.06,58.53,76.09,47.37,81.61,55.04,57.72,50,67.31,49.3,59.02,67.31,58.87,53.91,62.39,58.07,56.56,58.53,54.01,41.59,6.93,4,4,2.04,2.86,2.91,35.13,57.9,59.02,59.17,57.6,89.61,58.54,42.59,58.2,64.28,80,58.72,42.85,58.68,58.4,68.62,66.98,58.4,65.74,51.45,56.91,56.8,46.53,9.8,12.87,5.94,3.03,5.05,15.68,4.08,37.08,56.2,52.49,67.28,57.73,77.09,45.81,57.14,56.91,55.82,60.87,59.67,55.47,59.02,57.85,76.66,62.07,45.29,93.42,55.73,60.17,56.56,43.76,28.83,3.06,6.93,7.07,4,6.66,9.26,53.06,54.29,51.52,61.87,71.87,58.82,45.7,75,51.05,54.68,71.29,50.71,59.66,56.25,66.04,51.85,58.4,65.74,57.26,54.08,58.53,61.21,55.82,58.33,36.36,5.15,6,4,6,7.14,40.87,94.73,44.57,56.69,67.96,50.36,58.87,71.29,49.65,58.68,80.68,52.63,49.29,76.93,56.67,57.14,48.28,72.73,57.38,57.38,51.41,67.59,53.85,53.9,66.98,38.64,4,5.82,7.62,4.9,52.25,53.39,63.79,54.33,57.38,57.62,59.02,57.98,57.98,56.91,59.2,58.82,57.98,57.5,58.33,84.71,44.58,81.61,44.3,58.33,60.68,55.2,69.23,50,57.73,49.57,4.95,5,3.03,3,67.09,53.28,50,71.57,49.3]
  },
  {
    name: 'Memory Usage',
    percentage: true,
    data: [62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.39,62.39,62.39,62.39,62.41,62.41,62.41,62.48,62.57,62.57,62.57,62.60,62.60,62.60,62.60,62.60,62.60,62.64,62.65,62.65,62.66,62.67,62.69,62.78,62.80,62.92,62.78,62.78,62.78,62.78,62.78,62.77,62.78,62.78,62.78,62.78,62.78,62.78,62.78,62.82,62.82,62.82,62.82,62.83,62.84,62.84,62.84,62.85,62.85,62.85,62.85,62.86,62.86,62.92,62.96,62.96,62.96,62.97,62.97,62.97,62.97,62.97,62.97,62.97,62.99,63.04,63.04,63.04,63.04,63.04,63.04,63.04,63.04,63.08,63.08,63.08,63.08,63.09,63.10,63.10,63.10,63.12,63.12,63.12,63.12,63.15,63.17,63.17,63.17,63.17,63.17,63.19,63.19,63.19,63.22,63.22,63.22,63.22,63.26,63.26,63.26,63.26,63.27,63.27,63.27,63.27,63.29,63.29,63.29,63.29,63.29,63.31,63.32,63.32,63.32,63.33,63.33,63.33,63.33,63.33,63.33,63.33,63.33,63.33,63.35,63.36,63.36,63.36,63.37,63.37,63.37,63.37,63.37,63.37,63.39,63.39,63.39,63.40,63.40,63.40,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.43,63.43,63.43,63.43,63.43,63.43,63.43,63.43,63.45,63.45,63.45,63.45,63.45,63.45,63.45,63.46,63.46,63.47,63.47,63.47,63.47,63.48,63.48,63.48,63.48,63.48,63.48,63.49,63.49,63.49,63.49,63.49,63.49,63.49,63.50,63.50,63.50,63.50,63.50,63.50,63.50,63.51,63.51,63.51,63.51,63.52,63.53,63.53,63.53,63.53,63.53,63.53,63.53,63.54,63.54,63.54,63.54,63.55,63.55,63.57,63.57,63.57,63.56,63.56,63.59,63.60,63.60,63.60,63.60,63.63,63.63,63.63,63.65,63.65,63.65,63.65,63.65,63.67,63.68,63.68,63.68,63.68,63.69,63.70,63.70,63.70,63.70,63.71,63.71,63.71,63.72,63.74,63.74,63.74,63.74,63.74,63.74,63.74,63.74,63.75,63.75,63.76,63.75,63.76,63.82,63.82,63.82,63.82,63.90,63.90,63.90,63.90,63.90,63.90,63.90,63.90,63.90,63.94,63.94,63.94,63.94,63.96,63.96,63.96,63.96,63.96,63.96,63.96,63.97,64.04,64.04,64.04,64.04,64.05,64.05,64.06,64.07,64.07,64.12,64.12,64.12,64.12,64.12,64.12,64.12,64.12,64.12,64.12]
  },
  {
    name: 'Disk PG Steal',
    percentage: false,
    data:[1.82,6.00,0.00,1.84,4.00,6.87,8.79,6.78,7.27,2.01,3.03,7.92,7.37,0.00,0.00,0.00,4.00,7.97,7.35,9.75,1.01,4.85,3.03,5.89,3.88,3.62,2.13,5.71,8.00,7.11,1.41,0.30,0.00,0.00,0.00,5.13,5.66,5.63,2.03,8.89,5.48,4.97,3.03,8.46,6.00,0.30,1.61,1.37,8.79,8.18,0.00,0.00,0.00,0.00,8.79,6.88,6.35,2.41,6.12,2.73,0.61,5.52,4.24,0.55,5.58,0.30,7.27,3.33,1.82,8.36,0.00,0.00,0.00,2.54,5.76,1.02,9.49,7.99,4.00,2.28,7.01,2.36,6.00,6.09,2.00,5.78,9.59,4.03,9.60,0.00,0.00,0.00,0.00,8.00,6.36,9.80,0.15,3.38,7.51,4.08,1.16,9.55,4.01,9.75,9.55,8.69,5.38,8.00,0.00,0.00,0.00,6.33,7.74,21409.14,22367.51,23585.79,18272.00,16716.42,21226.13,21467.34,22012.12,17897.49,19135.68,16860.91,20688.00,21760.00,20703.03,    0.00,    0.00,    0.00,    0.00,18203.02,25265.67,13652.26,20905.58,18677.23,20223.35,24901.52,21478.79,19984.00,24145.45,19248.73,21840.00,22448.48,18830.15, 3648.00,    0.00,    0.00,    0.00,    0.00,23520.00,21012.24,16000.00,26996.95,17376.00,25810.10,21504.00,22721.61,15030.30,23321.21,24120.60,15872.00,22173.74,21734.01,19634.17,    0.00,    0.00,    0.00,    0.00,11890.36,12672.00,19566.17,20743.72,20418.27,17511.56,26683.08,20984.92,20406.03,21527.27,18274.11,25973.60,20229.15,22673.37,20791.96,13507.54,    0.00,    0.00,    0.00, 5575.76,12800.00,18715.15,25746.19,15678.39,22753.77,18379.90,23224.24,18857.14,20816.16,19248.48,23232.00,19542.86,17526.90,24511.68,12783.92,    0.00,    0.00,    0.00,    0.00,18042.21,19442.42,20759.39,20320.81,19441.21,19296.97,20888.44,21915.15,21866.67,22836.36,22659.90,23789.90,13539.70,24462.94,13932.31,    0.00,    0.00,    0.00, 7139.70,10560.00,16257.29,22579.59,22707.07,22629.74,18304.00,21624.24,18214.14,26595.92,20654.55,19459.90,19719.80,20578.22,21355.10, 7879.40,    0.00,    0.00,    0.00,20726.90, 8603.02,23806.06,23380.90,15244.22,18941.41,20424.49,19682.41,21766.50,20121.21,21947.47,22203.08,18860.61,26677.23,14129.23,    0.00,    0.00,    0.00, 4100.50,13025.13,16872.73,18800.00,23144.55,19004.08,25888.00,20430.77,22336.63,20564.47,18909.09,22854.82,22721.61,18090.45,20024.24,19589.85,    0.00,    0.00,    0.00,    0.00, 8297.49,23195.94,22480.40,20931.96,22255.28,19787.76,24224.00,18669.35,23065.99,20736.63,16897.96,26302.04,16498.49,17897.49,21149.24,    0.00,    0.00,    0.00,    0.00,14545.45, 6782.09,21003.05,17616.00,20640.00,27320.60,16519.80,21360.00,20993.94,21587.82]
  }
]

function getSetupFunction(data) {

  /* Format input data. Separation of percentage axis and raw number axis */
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
  })(data)

  console.log(formattedData)

  /* Transform the selected data type to target plain array type */
  function getPlainArray(selectedArray) {
    if (!selectedArray || selectedArray.length === 0)
      return []
    var plain = [selectedArray[0].id]
    for (var i = 0; i < selectedArray.length; i++) {
      plain.push(selectedArray[i].value)
    }
    return plain
  }

  /* Set up function called when components finish loading. */
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

    var confirmedSelection = []

    /* Actioin triggered by confirm button */
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
    }

    /* Action triggered by Unselect button */
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

    /* Action triggered by submission. Outputs target data format and user input 
      Sample Data Format:
        {
          author: "system",
          summary: "the sudden 80% spike in CPU usage is abmornal. Possibly due to memory usage ",
          selectedData: [
            {
              id: "CPU Usage",
              healthy: false,
              start: 
              end:
            }
          ]
        }
    */
    function submitSelect() {
      var submitRecord = {
        author: "system",
        summary: "the sudden 80% spike in CPU usage is abmornal. Possibly due to memory usage",
        selectedData: []
      }
      var shownData = plotAllData.data.shown()
      for (var i = 0; i < shownData.length; i++) {
        var id = shownData[i].id
        var selected = plotAllData.selected(id)
        submitRecord.selectedData.push({
          id: id,
          healthy: false,
          start: selected[0].x,
          end: selected[selected.length - 1].x
        })
      }
      console.log(submitRecord)
    }
  }
}

export default getSetupFunction(data)