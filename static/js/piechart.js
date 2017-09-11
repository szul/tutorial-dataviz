var d1 = [
        [0, 12]
    ];
var d2 = [
        [0, 4]
    ];
var d3 = [
        [0, 1]
    ];
var d4 = [
        [0, 2]
    ];

var graph = Flotr.draw(document.querySelector("#piechart"), [
        {
            data: d1,
            label: 'Completed'
        }, {
            data: d2,
            label: 'Pending'
        }, {
            data: d3,
            label: 'Declined'
        }, {
            data: d4,
            label: 'Expired',
            pie: {
                explode: 25
            }
        }
    ], {
    title: "EPA Status for Clark Kent",
    grid: {
        verticalLines: false,
        horizontalLines: false
    },
    xaxis: {
        showLabels: false
    },
    yaxis: {
        showLabels: false
    },
    pie: {
        show: true,
        explode: 0
    },
    mouse: {
        track: true
    },
    legend: {
        backgroundColor: '#FFF'
    }
});
