var data = {
    //  max CPU load: 0.87
    cpu_util: {
      data1: ['Average', 0.50507],
      data2: ['80 Percentile', 0.6228],
      data3: ['95 Percentile', 0.89]
    },
    cpu_iowait: {
      data1: ['Average', 0.0001524],
      data2: ['80 Percentile', 0.0],
      data3: ['95 Percentile', 0.0]
    },
    mem_used: {
      data1: ['Average', 0.633286],
      data2: ['80 Percentile', 0.6370],
      data3: ['95 Percentile', 0.6404]
    },
    disk_util: {
      data1: ['Average', 0.00214647],
      data2: ['80 Percentile', 0.0033],
      data3: ['95 Percentile', 0.00121]
    }
}

function createDonutChart(data, testName, query) {

  var getRemain = function(d, name) {
    return ['remain', 1 - d[name][1]]
  }

  var getAllData = function(d) {
    // Sequence: remain, data1, data2, data3
    var keys = Object.keys(d);
    if (keys.length === 0) {
      return [];
    }
    var data = [];
    for (var i = 0; i < keys.length; i++) {
      name = keys[i];
      data.push(d[name]);
    }
    var name = keys[0];
    data.push(['remain', 1 - d[name][1]]);
    return data
  }

  var allDataNames = Object.keys(data);
  var defaultName = allDataNames[0];
  var defaultLegend = data[defaultName][0];
  var legendToName = {}
  Object.keys(data).forEach(function(name) {
    legendToName[data[name][0]] = name
  })

  var allLegendsExcept = function(legend) {
    return Object.keys(legendToName).filter(function(elem) {
      return elem !== legend
    });
  }

  var allData = getAllData(data)

  var getPatterns = function(data) {
    // remain: '#D3D3D3'
    var s = data.map(function(d) {
      if (d[0] === "remain") {
        return '#D3D3D3'
      } else if (d[1] < 0.4) {
        return '#2CA02C' // green
      } else if (d[1] < 0.7) {
        return '#1f77b4' // blue
      } else {
        return '#d62728' //red
      }
    })
    return s
  }

  var chartDisplay = function(name) {
    chart.load({
      columns: [getRemain(data, name)],
      order: null
    });
    var legend = data[name][0]
    chart.show([legend])
    chart.hide(allLegendsExcept(legend));
  }

  var chart = c3.generate({
    bindto: query,
    data: {
      columns: allData,
      type: 'donut',
      onclick: function(d, i) {},
      hide: allLegendsExcept(defaultLegend),
      order: null
    },
    color: {
      pattern: getPatterns(allData)
    },
    donut: {
      title: (data[defaultName][1] * 100).toFixed(1),
      label: {
        show: false
      },
      // title: Math.round(percentage * 100),
      width: 15,
      expand: true,
    },
    legend: {
      hide: ['remain'],
      item: {
        onclick: function(id) {},
        onmouseover: function(name) {
          name = legendToName[name];
          chartDisplay(name);
          d3.select(query + ' .c3-chart-arcs-title').node().innerHTML = (data[name][1] * 100).toFixed(1);
        },
      },
    },
  });

  // baseline text properly
  d3.select(".c3-chart-arcs-title")
    .attr("dy", "0.15em")

  // add percentage symbol
  d3.select(".donut .c3-chart-arcs")
    .append("text")
    .text("%")
    .attr("font-size", "15px")
    .attr("dy", "-0.4em")
    .attr("dx", "2.8em")
}

 function getSetupFunction(data) {
    return function() {
        // Donut chart
        createDonutChart(data.cpu_util, "CPU", ".donut.detailed#cpu-util")
        createDonutChart(data.cpu_iowait, "CPU", ".donut.detailed#cpu-iowait")
        createDonutChart(data.mem_used, "CPU", ".donut.detailed#mem-used")
        createDonutChart(data.disk_util, "CPU", ".donut.detailed#disk-util")

        // Disk:
        //  xvda1
        Morris.Bar({
            element: 'disk-response-detailed',
            data: [
              { y: 'TPS', a: 1.06766, b: 1.64, c: 2.48 },
              { y: 'Await', a: 0.633286, b: 0.6370, c: 0.6404}
            ],
            xkey: 'y',
            ykeys: ['a', 'b', 'c'],
            labels: ['Average', '80 Percentile', '95 Percentile']
        });


        var overviewAggregateChart = c3.generate({
            bindto: '.chart.detailed#aggregate',
            data: {
                columns: [
                    ['Memory Usage', 62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.37,62.39,62.39,62.39,62.39,62.41,62.41,62.41,62.48,62.57,62.57,62.57,62.60,62.60,62.60,62.60,62.60,62.60,62.64,62.65,62.65,62.66,62.67,62.69,62.78,62.80,62.92,62.78,62.78,62.78,62.78,62.78,62.77,62.78,62.78,62.78,62.78,62.78,62.78,62.78,62.82,62.82,62.82,62.82,62.83,62.84,62.84,62.84,62.85,62.85,62.85,62.85,62.86,62.86,62.92,62.96,62.96,62.96,62.97,62.97,62.97,62.97,62.97,62.97,62.97,62.99,63.04,63.04,63.04,63.04,63.04,63.04,63.04,63.04,63.08,63.08,63.08,63.08,63.09,63.10,63.10,63.10,63.12,63.12,63.12,63.12,63.15,63.17,63.17,63.17,63.17,63.17,63.19,63.19,63.19,63.22,63.22,63.22,63.22,63.26,63.26,63.26,63.26,63.27,63.27,63.27,63.27,63.29,63.29,63.29,63.29,63.29,63.31,63.32,63.32,63.32,63.33,63.33,63.33,63.33,63.33,63.33,63.33,63.33,63.33,63.35,63.36,63.36,63.36,63.37,63.37,63.37,63.37,63.37,63.37,63.39,63.39,63.39,63.40,63.40,63.40,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.42,63.43,63.43,63.43,63.43,63.43,63.43,63.43,63.43,63.45,63.45,63.45,63.45,63.45,63.45,63.45,63.46,63.46,63.47,63.47,63.47,63.47,63.48,63.48,63.48,63.48,63.48,63.48,63.49,63.49,63.49,63.49,63.49,63.49,63.49,63.50,63.50,63.50,63.50,63.50,63.50,63.50,63.51,63.51,63.51,63.51,63.52,63.53,63.53,63.53,63.53,63.53,63.53,63.53,63.54,63.54,63.54,63.54,63.55,63.55,63.57,63.57,63.57,63.56,63.56,63.59,63.60,63.60,63.60,63.60,63.63,63.63,63.63,63.65,63.65,63.65,63.65,63.65,63.67,63.68,63.68,63.68,63.68,63.69,63.70,63.70,63.70,63.70,63.71,63.71,63.71,63.72,63.74,63.74,63.74,63.74,63.74,63.74,63.74,63.74,63.75,63.75,63.76,63.75,63.76,63.82,63.82,63.82,63.82,63.90,63.90,63.90,63.90,63.90,63.90,63.90,63.90,63.90,63.94,63.94,63.94,63.94,63.96,63.96,63.96,63.96,63.96,63.96,63.96,63.97,64.04,64.04,64.04,64.04,64.05,64.05,64.06,64.07,64.07,64.12,64.12,64.12,64.12,64.12,64.12,64.12,64.12,64.12,64.12],
                ],
                type: 'spline'
            }
        });

        setTimeout(function () {
            overviewAggregateChart.load({
                columns: [
                    ['CPU Usage', 8,3.96,3.03,4,3.03,4,3.03,2,45.62,87.95,43.56,61.54,55.64,61.21,56.25,72.16,49.65,60.83,57.38,56.1,80,45.75,56.56,57.5,87.5,44.79,58.07,60,60.66,55.9,58.54,62.28,58.69,55.12,47.42,36.61,29.57,12.38,14.42,59.42,60,58.06,58.69,58.87,60.83,63.39,51.88,65.22,52.71,58.88,59.16,57.02,78.72,45.75,58.33,91.03,53.03,63.06,43.97,58.68,72.16,63.39,57.38,46.76,58.33,64.04,63.89,48.61,63.48,63.06,53.24,63.96,55.04,55.91,61.34,54.69,59.02,58.53,93.59,58.54,45.86,77.52,58.68,42.68,58.54,58.34,86.59,43.75,61.02,59.02,74.73,45.4,64.87,65.71,58.53,58.73,48.05,22.81,28.86,55.47,68.57,71.72,48.3,57.38,57.72,52.63,62.73,57.5,84.52,44.3,57.14,58.06,57.73,56.8,58.54,90.91,58.33,50,48.32,88.75,58.07,58.4,43.13,7,4,5,12.87,6,34.07,73.68,53.43,58.27,46.06,58.53,76.09,47.37,81.61,55.04,57.72,50,67.31,49.3,59.02,67.31,58.87,53.91,62.39,58.07,56.56,58.53,54.01,41.59,6.93,4,4,2.04,2.86,2.91,35.13,57.9,59.02,59.17,57.6,89.61,58.54,42.59,58.2,64.28,80,58.72,42.85,58.68,58.4,68.62,66.98,58.4,65.74,51.45,56.91,56.8,46.53,9.8,12.87,5.94,3.03,5.05,15.68,4.08,37.08,56.2,52.49,67.28,57.73,77.09,45.81,57.14,56.91,55.82,60.87,59.67,55.47,59.02,57.85,76.66,62.07,45.29,93.42,55.73,60.17,56.56,43.76,28.83,3.06,6.93,7.07,4,6.66,9.26,53.06,54.29,51.52,61.87,71.87,58.82,45.7,75,51.05,54.68,71.29,50.71,59.66,56.25,66.04,51.85,58.4,65.74,57.26,54.08,58.53,61.21,55.82,58.33,36.36,5.15,6,4,6,7.14,40.87,94.73,44.57,56.69,67.96,50.36,58.87,71.29,49.65,58.68,80.68,52.63,49.29,76.93,56.67,57.14,48.28,72.73,57.38,57.38,51.41,67.59,53.85,53.9,66.98,38.64,4,5.82,7.62,4.9,52.25,53.39,63.79,54.33,57.38,57.62,59.02,57.98,57.98,56.91,59.2,58.82,57.98,57.5,58.33,84.71,44.58,81.61,44.3,58.33,60.68,55.2,69.23,50,57.73,49.57,4.95,5,3.03,3,67.09,53.28,50,71.57,49.3],
                ]
            });
        }, 1000);
    }
}

export default getSetupFunction(data)