Highcharts.chart('containerPv', {
    chart: {
        type: 'Combination chart',
        zoomType:'xy'
    },
    title: {
        text: 'Indicador Logística Nacional'
    },
    subtitle: {
        text: 'Fuente:Remedy'
    },
    xAxis: {
        categories: [
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',            
        ],
        crosshair: true
    },
    yAxis:  [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '%',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: '',
            style: {
                color: Highcharts.getOptions().colors[0]
            }
        },        
        opposite: true
    }],
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        type: 'column',
        name: 'Indicador',
        data: [100.00, 99.87, 99.90,100.00,100.00,100.00,99.99,99.99,100.00],
        color:'#088A29'

    }, {
        type: 'spline',
        name: 'Cumplimiento',
        yAxis:1,
        data: [100,95,99,100,100,100,99,99,100],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    },
    ]
});


Highcharts.chart('containerPv2', {
    chart: {
        type: 'Column',
        zoomType:'xy'
    },
    title: {
        text: 'Indicador Logística Nacional'
    },
    subtitle: {
        text: 'Fuente:Remedy'
    },
    xAxis: {
        categories: [            
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',            
        ],        
        crosshair: false
    },
    yAxis:  [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '%',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        gridLineColor: "#e6e6e6",
gridLineDashStyle: "Solid",
gridLineInterpolation: null,
gridLineWidth: 1,
gridZIndex: 1,
    }],
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        type: 'column',
        name: '2017',
        data: [100.00, 100.00, 100.00,99.64,99.84,100.00],
        color:'#088A29'

    }, {
        type: 'column',
        name: '2016',
        data: [99.95, 99.74, 99.84,99.52,99.76,99.95],
        color:'#04B404'

    },
    ]
});



Highcharts.chart('containerApp', {
    chart: {
        type: 'Column',
        zoomType:'xy'
    },
    title: {
        text: 'Indicador Back Office'
    },
    subtitle: {
        text: 'Fuente:Remedy'
    },
    xAxis: {
        categories: [
            '13Masivos',
            '119-inteligente',
            'Citrix',            
        ],
        crosshair: true
    },
    yAxis:  [{ // Primary yAxis
        labels: {
            format: '{value}',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        },
        title: {
            text: '%',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    },],
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        type: 'column',
        name: 'Indicador',
        data: [98, 99.87, 100],
        color:'#088A29'

    }, 
    ]
});