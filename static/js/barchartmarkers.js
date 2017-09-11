var
xmark = new Image(),
    checkmark = new Image(),
    bars = {
        data: [],
        bars: {
            show: true,
            barWidth: 0.6,
            lineWidth: 0,
            fillOpacity: 0.8
        }
    },
    markers = {
        data: [],
        markers: {
            show: true,
            position: 'ct',
            labelFormatter: function(o) {
                return (o.y >= 5) ? checkmark : xmark;
            },
        }
    },
    flotr = Flotr,
    point, graph, i;

var epas = [
     [0, "EPA 1"]
    ,[1, "EPA 2"]
    ,[2, "EPA 3"]
    ,[3, "EPA 4"]
    ,[4, "EPA 5"]
    ,[5, "EPA 6"]
    ,[6, "EPA 7"]
    ,[7, "EPA 8"]
    ,[8, "EPA 9"]
    ,[9, "EPA 10"]
    ,[10, "EPA 11"]
    ,[11, "EPA 12"]
    ,[12, "EPA 13"]
];

for (i = 0; i < 13; i++) {
    point = [i, Math.ceil(Math.random() * 10)];
    bars.data.push(point);
    markers.data.push(point);
}

var runner = function() {
        if (!xmark.complete || !checkmark.complete) {
            setTimeout(runner, 50);
            return;
        }

        graph = flotr.draw(
        document.querySelector("#markers"), [bars, markers], {
            title: "Total Assessments Completed for this Block",
            colors: ["#ff942b"],
            yaxis: {
                min: 0,
                max: 12,
                tickDecimals: 0
            },
            xaxis: {
                min: 0,
                ticks: epas
            },
            grid: {
                verticalLines: false
            }
        });
    }

xmark.onload = runner;
xmark.src = '../static/images/xmark.png';
checkmark.src = '../static/images/checkmark.png';
