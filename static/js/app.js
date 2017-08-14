/*
Radar Chart - Medical Year Students
*/
if(document.querySelector("#radial") != null) {
    var med1 = {
        label: "Med 1"
        , data: [
             [0, 1]
            ,[1, 1]
            ,[2, 0]
            ,[3, 0]
            ,[4, 0]
            ,[5, 0]
            ,[6, 0]
            ,[7, 0]
            ,[8, 0]
            ,[9, 0]
            ,[10, 0]
            ,[11, 0]
            ,[12, 0]
            ,[13, 0]
        ]
    };
    var med2 = {
        label: "Med 2"
        , data: [
             [0, 2]
            ,[1, 2]
            ,[2, 3]
            ,[3, 0]
            ,[4, 0]
            ,[5, 2]
            ,[6, 3]
            ,[7, 0]
            ,[8, 0]
            ,[9, 0]
            ,[10, 0]
            ,[11, 0]
            ,[12, 0]
            ,[13, 0]
        ]
    };
    var med3 = {
        label: "Med 3"
        , data: [
             [0, 3]
            ,[1, 3]
            ,[2, 3]
            ,[3, 3]
            ,[4, 4]
            ,[5, 3]
            ,[6, 3]
            ,[7, 3]
            ,[8, 4]
            ,[9, 3]
            ,[10, 3]
            ,[11, 3]
            ,[12, 3]
            ,[13, 3]
        ]
    };
    var med4 = {
        label: "Med 4"
        , data: [
             [0, 4]
            ,[1, 4]
            ,[2, 4]
            ,[3, 4]
            ,[4, 4]
            ,[5, 4]
            ,[6, 3]
            ,[7, 4]
            ,[8, 4]
            ,[9, 4]
            ,[10, 3]
            ,[11, 3]
            ,[12, 4]
            ,[13, 4]
        ]
    };
    var ticks = [
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
    var graph = Flotr.draw(document.querySelector("#radial"), [med4, med3, med2, med1], {
        radar: {
            show: true,
            fillOpacity: 0
        },
        grid: {
            circular: true,
            minorHorizontalLines: true
        },
        yaxis: {
            min: 0,
            max: 5,
            minorTickFreq: 0,
            showLabels: false
        },
        xaxis: {
            ticks: ticks
        }
    });
}
