function createDonutChart(data, testName, donut_id) {

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
  	bindto: '#' + donut_id,
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
          d3.select("#" + donut_id + ' .c3-chart-arcs-title').node().innerHTML = (data[name][1] * 100).toFixed(1);
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

export function setUpDonut() {
  //  max CPU load: 0.87


  var cpu_util = {
      data1: ['Average', 0.50507],
      data2: ['80 Percentile', 0.6228],
      data3: ['95 Percentile', 0.89]
  }

  var cpu_iowait = {
      data1: ['Average', 0.0001524],
      data2: ['80 Percentile', 0.0],
      data3: ['95 Percentile', 0.0]
  }

  var mem_used = {
      data1: ['Average', 0.633286],
      data2: ['80 Percentile', 0.6370],
      data3: ['95 Percentile', 0.6404]
  }

  var disk_util = {
      data1: ['Average', 0.00214647],
      data2: ['80 Percentile', 0.0033],
      data3: ['95 Percentile', 0.00121]
  }


  createDonutChart(cpu_util, "CPU", "cpu_chart1")
  createDonutChart(cpu_iowait, "CPU", "cpu_chart2")
  createDonutChart(mem_used, "CPU", "mem_chart1")
  createDonutChart(disk_util, "CPU", "disk_chart2")

  $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {
            alert('The new tab is about to be shown.');
  });
  createDonutChart(cpu_util, "CPU", "cpu_chart1_detail")
  createDonutChart(cpu_iowait, "CPU", "cpu_chart2_detail")
  createDonutChart(mem_used, "CPU", "mem_chart1_detail")
  createDonutChart(disk_util, "CPU", "disk_chart2_detail")

  // Disk:
  //  xvda1
  Morris.Bar({
    element: 'disk_chart1',
    data: [
      { y: 'TPS', a: 1.06766, b: 1.64, c: 2.48 },
      { y: 'Await', a: 0.633286, b: 0.6370, c: 0.6404}
    ],
    xkey: 'y',
    ykeys: ['a', 'b', 'c'],
    labels: ['Average', '80 Percentile', '95 Percentile']
  });

  Morris.Bar({
    element: 'disk_chart1_detail',
    data: [
      { y: 'TPS', a: 1.06766, b: 1.64, c: 2.48 },
      { y: 'Await', a: 0.633286, b: 0.6370, c: 0.6404}
    ],
    xkey: 'y',
    ykeys: ['a', 'b', 'c'],
    labels: ['Average', '80 Percentile', '95 Percentile']
  });
}