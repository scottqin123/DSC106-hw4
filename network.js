Highcharts.addEvent(
    Highcharts.Series,
    'afterSetOptions',
    function (e) {
        var colors = Highcharts.getOptions().colors,
            i = 0,
            nodes = {};

        if (
            this instanceof Highcharts.seriesTypes.networkgraph &&
            e.options.id === 'lang-tree'
        ) {
            e.options.data.forEach(function (link) {

                if (link[0] === 'Arnold Schwarzenegger') {
                    nodes['Arnold Schwarzenegger'] = {
                        id: 'Arnold Schwarzenegger',
                        marker: {
                            radius: 20
                        }
                    };
                    nodes[link[1]] = {
                        id: link[1],
                        marker: {
                            radius: 10
                        },
                        color: colors[i++]
                    };
                } else if (nodes[link[0]] && nodes[link[0]].color) {
                    nodes[link[1]] = {
                        id: link[1],
                        color: nodes[link[0]].color
                    };
                }
            });

            e.options.nodes = Object.keys(nodes).map(function (id) {
                return nodes[id];
            });
        }
    }
);

Highcharts.chart('container', {
    chart: {
        type: 'networkgraph',
        height: '100%'
    },
    title: {
        text: 'Arnold Schwarzenegger'
    },
    subtitle: {
        text: 'Movie Info'
    },
    plotOptions: {
        networkgraph: {
            keys: ['from', 'to'],
            layoutAlgorithm: {
                enableSimulation: true,
                friction: -0.9
            }
        }
    },
    series: [{
        dataLabels: {
            enabled: true,
            linkFormat: ''
        },
        id: 'lang-tree',
        data: [
            ['Arnold Schwarzenegger', 'The Terminator'],
            ['Arnold Schwarzenegger', 'Predator'],
            ['Arnold Schwarzenegger', 'Terminator: Dark Fate'],
            ['Arnold Schwarzenegger', 'Commando'],
            ['Arnold Schwarzenegger', 'Terminator 2: Judgement Day'],
            ['Arnold Schwarzenegger', 'Total Recall'],
            ['Arnold Schwarzenegger', 'Twins'],
            ['Arnold Schwarzenegger', 'True Lies'],
            ['The Terminator', '1984'],
            ['The Terminator', 'As: T-800'],
            ['Predator', '1987'],
            ['Predator', 'As: Dutch'],
            ['Terminator: Dark Fate', '2019'],
            ['Terminator: Dark Fate', 'As: T-800'],
            ['Commando', '1985'],
            ['Commando', 'As: Col. John Matrix'],
            ['Terminator 2: Judgement Day', '1991'],
            ['Terminator 2: Judgement Day', 'As: T-800'],
            ['Total Recall', '1990'],
            ['Total Recall', 'As: Doug'],
            ['Twins', '1988'],
            ['Twins', 'As: Julius Benedict'],
            ['True Lies', '1994'],
            ['True Lies', 'Harry']
         
            
        ]
    }]
});