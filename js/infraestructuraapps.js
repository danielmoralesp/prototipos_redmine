Highcharts.chart('containerPv2', {
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
            'Sismilenio',
            'Envios',
            '8-Atención a cliente', 
            '9-Avisos judiciales',
            '15-Provicion de guias',            
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
        name: 'Indicador',
        data: [100.00, 100.00, 65, 80, 70],
        color:'#088A29'

    }, 
    ]
});
