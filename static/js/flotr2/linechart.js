var years = [
     [ 0, "01/2017" ]
    ,[ 1, "02/2017" ]
    ,[ 2, "03/2017" ]
    ,[ 3, "04/2017" ]
    ,[ 4, "05/2017" ]
    ,[ 5, "06/2017" ]
    ,[ 6, "07/2017" ]
    ,[ 7, "08/2017" ]
    ,[ 8, "09/2017" ]
    ,[ 9, "10/2017" ]
    ,[ 10, "11/2017" ]
    ,[ 11, "12/2017" ]
];

var epa1 = [
    [ 0, 2 ],
    [ 1, 3 ],
    [ 2, 3 ],
    [ 3, 4 ]
];

var epa2 = [
    [ 0, 4 ],
    [ 1, 4 ],
    [ 2, 4 ],
    [ 3, 3 ]
];

Flotr.draw(
    document.querySelector("#linechart"),
    [ 
      { 
        data: epa1,
        label: "EPA 1",
        lines: {
            show:true
        }
      },
      {
        data: epa2,
        label: "EPA 2",
        lines: {
            show:true
        }
      }
    ],
    {
        title: "Progress of Level of Supervision",
        grid: {
            horizontalLines: true, verticalLines: false
        },
        xaxis: {
            ticks: years
        }
        ,yaxis: {
            min: 0
            , max: 5
            , tickDecimals: 0
        }
    }
);
