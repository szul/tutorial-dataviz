var bar = new Chart(document.querySelector("#stackedbarchart"), {
    type: "bar"
    ,data: {
        labels: ["EPA 1", "EPA 2", "EPA 3", "EPA 4", "EPA 5", "EPA 6", "EPA 7", "EPA 8", "EPA 9", "EPA 10", "EPA 11", "EPA 12", "EPA 13"],
        datasets: [
            {
                label: "Total EPA's Completed",
                data: [12, 19, 3, 5, 2, 3, 1, 1, 1, 10, 11, 15, 20],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
            ,{
                label: "Total EPA's Remaining",
                data: [8, 1, 17, 15, 18, 17, 19, 19, 19, 10, 9, 5, 0],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }
        ]
    }
    ,options: {
        title: {
            display: true
            ,text: "EPA's Completed/Required"
        }
        ,scales: {
            xAxes: [
                {
                    ticks:
                    {
                        autoSkip: false
                        ,maxRotation: 0
                        ,minRotatation: 0
                    }
                    ,stacked: true
                }
            ]
            ,yAxes: [
                {
                    ticks: {
                        max: 25
                    }
                    ,stacked: true
                }
            ]
        }
    }
});

var pie = new Chart(document.querySelector("#piechart"), {
    type: "pie"
    ,data: {
        datasets: [
            {
                data: [45, 10, 5]
                ,backgroundColor: [
                    "rgb(54, 162, 235)",
                    "rgb(201, 203, 207)",
                    "rgb(255, 99, 132)",
                ],
            }
        ]
        ,labels: ["Completed", "Expired", "Denied"]
    }
    ,options: {
        title: {
            display: true
            ,text: "EPA Status"
        }
    }
});

var line = new Chart(document.querySelector("#linechart"), {
    type: "line"
    ,data: {
        labels: [
             "Jan 2017"
            ,"Feb 2017"
            ,"Mar 2017"
            ,"Apr 2017"
            ,"May 2017"
            ,"Jun 2017"
            ,"Jul 2017"
            ,"Aug 2017"
            ,"Sep 2017"
        ]
        ,datasets: [
            {
                label: "EPA 1"
                ,fill: false
                ,backgroundColor: Chart.helpers.color("rgb(54, 162, 235)").alpha(0.5).rgbString()
                ,borderColor: "rgb(54, 162, 235)"
                ,borderWidth: 1
                ,data: [
                    2, 3, 4, 3, 3, 3, 3, 2, 2
                ]
            }
            ,{
                label: "EPA 2"
                ,fill: false
                ,backgroundColor: Chart.helpers.color("rgba(255,99,132,1)").alpha(0.5).rgbString()
                ,borderColor: "rgba(255,99,132,1)"
                ,borderWidth: 1
                ,data: [
                    2, 2, 2, 2, 4, 3, 3, 3, 2
                ]
            }
            ,{
                label: "EPA 3"
                ,fill: false
                ,backgroundColor: Chart.helpers.color("rgba(255, 206, 86, 1)").alpha(0.5).rgbString()
                ,borderColor: "rgba(255, 206, 86, 1)"
                ,borderWidth: 1
                ,data: [
                    4, 4, 4, 3, 4, 3, 2, 3, 3
                ]
            }
        ]
    }
    ,options: {
        title: {
            display: true
            ,text: "EPA Progress Over Time"
        }
        ,scales: {
            yAxes: [
                {
                    ticks: {
                        min: 1
                        ,callback: function(val) {
                            return Number.isInteger(val) ? val : null;
                        }
                    }
                }
            ]
        }
    }
});
