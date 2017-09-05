var completedRequests = [
    [
        [0,10]
        ,[1,12]
        ,[2,24]
        ,[3,48]
    ]
];

var medYears = [
    [0, "Med 1"]
    ,[1, "Med 2"]
    ,[2, "Med 3"]
    ,[3, "Med 4"]
];

Flotr.draw(document.querySelector("#barchart"), completedRequests, {
    title: "Completed Assessment Requests",
    bars: {
        show: true,
        barWidth: 0.5
    },
    yaxis: {
        min: 0,
        tickDecimals: 0
    },
    xaxis: {
        ticks: medYears
    }
});
