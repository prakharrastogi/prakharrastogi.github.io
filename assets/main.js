var options = {
    chart: {
        type: 'bar',
        height: 380
    },
    plotOptions: {
        bar: {
            barHeight: '100%',
            distributed: true,
            horizontal: true,
            dataLabels: {
                position: 'bottom'
            },
        }
    },
    colors: ['#33b2df', '#546E7A', '#d4526e', '#13d8aa', '#A5978B', '#2b908f', '#f9a3a4', '#90ee7e',
        '#f48024', '#69d2e7'
    ],
    dataLabels: {
        enabled: true,
        textAnchor: 'start',
        style: {
            colors: ['#fff']
        },
        formatter: function (val, opt) {
            return opt.w.globals.labels[opt.dataPointIndex] + ":  " + val
        },
        offsetX: 0,
        dropShadow: {
            enabled: true
        }
    },
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    yaxis: {
        labels: {
            show: false
        }
    },
    tooltip: {
        theme: 'dark',
        x: {
            show: false
        },
        y: {
            title: {
                formatter: function () {
                    return ''
                }
            }
        }
    },
    series: [{
        data: [95, 80, 100, 70, 80, 80, 65, 100, 90, 90]
    }],
    xaxis: {
        categories: ['C#', 'SQL', '.NET Core', 'Web API', 'Angular', 'React', 'Azure',
            'GCP', 'MongoDB', 'Docker'
        ],
        max: 100,
        labels: {
            show: false
        }
    },
    legend: {
        show: false
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();