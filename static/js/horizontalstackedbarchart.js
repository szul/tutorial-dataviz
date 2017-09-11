var completed = [
     [10, 0]
    ,[12, 1]
    ,[12, 2]
    ,[30, 3]
];
var requiredLeftover = [
     [30, 0]
    ,[28, 1]
    ,[28, 2]
    ,[10, 3]
];

var students = [
    [0, "Arthur Curry"]
   ,[1, "Hal Jordan"]
   ,[2, "Bruce Wayne"]
   ,[3, "Clark Kent"]
];

var graph = Flotr.draw(document.querySelector("#horizontalstacked"), [
        {
            data: completed,
            label: "Completed"
        }, {
            data: requiredLeftover,
            label: "Required"
        }
    ]
    , {
        legend: {
        backgroundColor: "#fff",
        position: "se"
    },
    title: "Assessments by Student for Current Block - Completed vs. Required",
    colors: ["#386193", "#ff942b"],
    bars: {
        show: true,
        stacked: true,
        horizontal: true,
        barWidth: 0.5,
        lineWidth: 1,
        shadowSize: 0
    },
    grid: {
        verticalLines: true,
        horizontalLines: false
    }
    ,yaxis: {
        ticks: students
    },
    xaxis: {
        min: 0,
        max: 50,
        tickDecimals: 0
    }
});
