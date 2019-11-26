Highcharts.chart('container', {
    series: [{
        type: "treemap",
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '15px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: 'A',
            name: 'Terminator 2',
            color: "#EC2500"
        }, {
            id: 'B',
            name: 'Terminator: Genisys',
            color: "#ECE100"
        }, {
            id: 'O',
            name: 'Terminator 3',
            color: '#EC9800'
        }, {
            id: 'C',
            name: 'True Lies',
            color: '#000000'
        }, {
            id: 'D',
            name: 'Terminator Salvation',
            color: '#0000FF'
        }, {
            name: 'Domestic',
            parent: 'A',
            value: 204
        }, {
            name: 'International',
            parent: 'A',
            value: 313
        }, {
            name: 'Domestic',
            parent: 'B',
            value: 89
        }, {
            name: 'International',
            parent: 'B',
            value: 350
        }, {
            name: 'Domestic',
            parent: 'O',
            value: 150
        }, {
            name: 'International',
            parent: 'O',
            value: 283
        }, {
            name: 'Domestic',
            parent: 'D',
            value: 125
        }, {
            name: 'International',
            parent: 'D',
            value: 240
        }, {
            name: 'Domestic',
            parent: 'C',
            value: 125,
        }, {
            name: 'International',
            parent: 'C',
            value: 240,
        }]
    }],
    title: {
        text: 'Top Five Schwarzenegger Movie Box Office (in millions)'
    }
});