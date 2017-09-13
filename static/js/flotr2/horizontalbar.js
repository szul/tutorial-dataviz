
var horizontal = true;
var d1 = [];
var point;
var i;
var students = [
     [0, "Arthur Curry"]
    ,[1, "Hal Jordan"]
    ,[2, "Bruce Wayne"]
    ,[3, "Clark Kent"]
    ,[4, "Scott Free"]
    ,[5, "Barry Allen"]
    ,[6, "Wally West"]
    ,[7, "Jon Stewart"]
];

for (i = 0; i < 8; i++) {
    if (horizontal) {
        point = [Math.ceil(Math.random() * 10), i];
    } else {
        point = [i, Math.ceil(Math.random() * 10)];
    }

    d1.push(point);
}

var graph = Flotr.draw(
    document.querySelector("#horizontal"), [d1], {
        title: "Assessments completed in this block",
    bars: {
        show: true,
        horizontal: horizontal,
        shadowSize: 0,
        barWidth: 0.5
    },
    mouse: {
        track: true,
        relative: true
    },
    grid: {
        horizontalLines: false
    },
    yaxis: {
        min: 0,
        ticks: students
    },
    xaxis: {
        tickDecimals: 0
    }
});
