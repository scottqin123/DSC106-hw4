var text = 'With his ascension to the top of the bodybuilding world, it was only a matter of time before Schwarzenegger would move over to the big screen. After a few small parts, Schwarzenegger received a Golden Globe Award for Best Newcomer for his performance in Stay Hungry (1976). With his immense physical strength and size, Schwarzenegger was a natural for action films. He became a leading figure in several popular 1980s action movies, including Conan the Barbarian (1982) and its sequel, Conan the Destroyer (1984). Schwarzenegger also starred as a deadly machine from the future in The Terminator (1984), and later reprised the role for Terminator 2: Judgment Day (1991) and Terminator 3: Rise of the Machines (2003). Additional action flicks from the actors heyday include Commando (1985), Predator (1987), The Running Man (1987), Total Recall (1990) and True Lies (1994). He also used his oversized physique to comedic effect in Twins (1988) and Kindergarten Cop (199';
var lines = text.split(/[,\. ]+/g),
    data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart('container', {
    series: [{
        type: 'wordcloud',
        data: data,
        name: 'Occurrences'
    }],
    title: {
        text: 'Wordcloud of Arnald Schwarzenegger'
    }
});