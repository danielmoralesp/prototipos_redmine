Highcharts.chart('containerPv', {
    chart: {
        type: 'Combination chart',
        zoomType:'xy'
    },
    title: {
        text: 'Indicador nivel de atención'
    },
    subtitle: {
        text: 'Fuente:Nuxiba'
    },
    xAxis: {
        categories: [
            'Semana 35',
            'Semana 36',
            'Semana 37',            
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
            text: 'LLamadas',
            style: {
                color: Highcharts.getOptions().colors[1]
            }
        }
    }, { // Secondary yAxis
        title: {
            text: 'NS/NA',
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
        name: 'LLamadas recibidas',
        data: [403, 1778, 1170]

    }, {
        type: 'column',
        name: 'LLamadas contestadas',
        data: [335, 1542, 1123]

    }, {
        type: 'column',
        name: 'Llamadas dentro de NS',
        data: [222, 1223, 960]

    }, {
        type: 'column',
        name: 'Llamadas abandonadas',
        data: [60, 236, 70]

    }, {
        type: 'spline',
        name: 'NA',
        yAxis:1,
        data: [83,86, 96],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    },{
        type: 'spline',
        name: 'NS',
        yAxis:1,
        data: [55,68, 82],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[4],
            fillColor: 'white'
        }
    }

    ]
});