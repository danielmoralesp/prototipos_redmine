Highcharts.chart('containerPv', {
    chart: {
        type: 'column',
        zoomType:'xy'
    },
    title: {
        text: 'Indicador Virtualización - Entrega de cambios'
    },
    subtitle: {
        text: 'Fuente:TFS'
    },
    xAxis: {
        categories: [            
            '2016',
            '2017-1',
            '2017-2', 
            '2017-3',
            '2017-4',
            '2017-5',
            '2017-6',
            'T2017',            
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
        name: 'Cancelado',
        data: [172, 5, 4, 7, 11,35,11,55]

    },{
        name: 'En cola',
        data: [19, 2, 3, 2, 1, 7, 20]

    },{
        name: 'En curso',
        data: [22, 1, 2, 2, 5, 3, 13]
    },{
        name: 'Entregado',
        data: [237, 31, 22, 8, 39, 47, 120]
    }
    ]
});
