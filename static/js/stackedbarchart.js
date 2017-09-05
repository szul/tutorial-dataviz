var completed = [
    [0, 10]
    ,[1, 12]
    ,[2, 24]
    ,[3, 48]
];
var requiredLeftover = [
    [0, 2]
    ,[1, 0]
    ,[2, 0]
    ,[3, 12]
];

var medYears = [
    [0, "Med 1"]
    ,[1, "Med 2"]
    ,[2, "Med 3"]
    ,[3, "Med 4"]
];

graph = Flotr.draw(document.querySelector("#stacked"), [
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
        backgroundColor: "#fff" 
    },
    title: "Assessments by Med Year - Completed vs. Required",
    colors: ["#386193", "#ff942b"],
    bars: {
        show: true,
        stacked: true,
        horizontal: false,
        barWidth: 0.6,
        lineWidth: 1,
        shadowSize: 0
    },
    grid: {
        verticalLines: false,
        horizontalLines: false
    }
    ,yaxis: {
        min: 0,
        tickDecimals: 0
    },
    xaxis: {
        ticks: medYears
    }
});
