Highcharts.chart('containerPv', {
    chart: {
        type: 'Combination chart',
        zoomType:'xy'
    },
    title: {
        text: 'Cumplimineto vs Semana'
    },
    subtitle: {
        text: 'Fuente:Service Manager'
    },
    xAxis: {
        categories: [
            'Mesa de servicio',
            'Sopote Sitio Nacional',
            'Virtualización',
            'Infraestructura tecnológica',            
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
            text: '%',
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
        name: 'Cumplido',
        data: [221, 93, 9, 6]

    }, {
        type: 'column',
        name: 'Incumplido',
        data: [3,7,5,5]

    }, {
        type: 'spline',
        name: 'Cumplimiento',
        yAxis:1,
        data: [98.66,92, 64, 54.5],
        marker: {
            lineWidth: 2,
            lineColor: Highcharts.getOptions().colors[3],
            fillColor: 'white'
        }
    },
    ]
});