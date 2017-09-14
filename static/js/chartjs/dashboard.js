var bar = new Chart(document.querySelector("#stackedbarchart"), {
    type: "bar"
    ,data: {
        labels: [["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"],["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"], ["11", "11"], ["12", "12"], ["13", "13"]]
        ,datasets: [
            {
                label: "Total EPA's Completed",
                data: [12, 19, 3, 5, 2, 3, 1, 1, 1, 10, 11, 15, 20],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
            ,{
                label: "Total EPA's Required",
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
                    scaleLabel: {
                        display: true
                        ,labelString: "EPA"
                    }
                    ,ticks:
                    {
                        autoSkip: false
                        ,maxRotation: 0
                        ,minRotatation: 0
                        ,callback: function(val) {
                            return val[1];
                        }
                    }
                    ,stacked: true
                }
            ]
            ,yAxes: [
                {
                    scaleLabel: {
                        display: true
                        ,labelString: "Count"
                    }
                    ,ticks: {
                        max: 25
                    }
                    ,stacked: true
                }
            ]
        }
        ,onClick: function(e) {
            var elem = bar.getElementAtEvent(e);
            var epa = bar.config.data.labels[elem[0]._index][0];
            var epaTitle = bar.config.data.labels[elem[0]._index][1];

            pie.data.datasets[0].data = pieData[epa];
            pie.options.title.text = "EPA Status for " + epaTitle;
            pie.update();

            var lineData = [];
            for(var i = 0; i < defaultLineData.length; i++) {
                if(defaultLineData[i].id == epa) {
                    lineData.push(defaultLineData[i]);
                }
            }
            line.data.datasets = lineData;
            line.update();
        }
    }
});

var defaultPieData = [176, 30, 10];

var pieData = {
     "1": [45, 10, 5]
    ,"2": [50, 8, 3]
    ,"3": [60, 0, 2]
    ,"4": [75, 4, 1]
    ,"5": [30, 13, 0]
    ,"6": [35, 7, 2]
    ,"7": [45, 6, 3]
    ,"8": [55, 3, 1]
    ,"9": [60, 4, 1]
    ,"10": [70, 19, 0]
    ,"11": [80, 5, 1]
    ,"12": [80, 10, 0]
    ,"13": [65, 6, 2]
}

var pie = new Chart(document.querySelector("#piechart"), {
    type: "pie"
    ,data: {
        datasets: [
            {
                data: defaultPieData
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

var defaultLineData = [
    {
         id: "1"
        ,label: "EPA 1"
        ,fill: false
        ,backgroundColor: Chart.helpers.color("rgba(54, 162, 235, 1)").alpha(0.5).rgbString()
        ,borderColor: "rgba(54, 162, 235, 1)"
        ,borderWidth: 1
        ,data: [
            2, 3, 4, 3, 3, 3, 3, 2, 2
        ]
    }
    ,{
         id: "2"
        ,label: "EPA 2"
        ,fill: false
        ,backgroundColor: Chart.helpers.color("rgba(255, 99, 132, 1)").alpha(0.5).rgbString()
        ,borderColor: "rgba(255, 99, 132, 1)"
        ,borderWidth: 1
        ,data: [
            2, 2, 2, 2, 4, 3, 3, 3, 2
        ]
    }
    ,{
         id: "3"
        ,label: "EPA 3"
        ,fill: false
        ,backgroundColor: Chart.helpers.color("rgba(255, 206, 86, 1)").alpha(0.5).rgbString()
        ,borderColor: "rgba(255, 206, 86, 1)"
        ,borderWidth: 1
        ,data: [
            4, 4, 4, 3, 4, 3, 2, 3, 3
        ]
    }
    ,{
        id: "4"
       ,label: "EPA 4"
       ,fill: false
       ,backgroundColor: Chart.helpers.color("rgba(54, 162, 235, 1)").alpha(0.5).rgbString()
       ,borderColor: "rgba(54, 162, 235, 1)"
       ,borderWidth: 1
       ,data: [
           3, 3, 2, 2, 3, 3, 3, 3, 3
       ]
   }
   ,{
        id: "5"
        ,label: "EPA 5"
        ,fill: false
        ,backgroundColor: Chart.helpers.color("rgba(75, 192, 192, 1)").alpha(0.5).rgbString()
        ,borderColor: "rgba(75, 192, 192, 1)"
        ,borderWidth: 1
        ,data: [
            4, 4, 4, 4, 4, 4, 3, 3, 3
        ]
    }
    ,{
        id: "6"
        ,label: "EPA 6"
        ,fill: false
        ,backgroundColor: Chart.helpers.color("rgba(153, 102, 255, 1)").alpha(0.5).rgbString()
        ,borderColor: "rgba(153, 102, 255, 1)"
        ,borderWidth: 1
        ,data: [
            3, 3, 3, 3, 4, 3, 3, 3, 3
        ]
    }
    ,{
        id: "7"
        ,label: "EPA 7"
        ,fill: false
        ,backgroundColor: Chart.helpers.color("rgba(255, 159, 64, 1)").alpha(0.5).rgbString()
        ,borderColor: "rgba(255, 159, 64, 1)"
        ,borderWidth: 1
        ,data: [
            4, 4, 4, 4, 3, 3, 2, 3, 3
        ]
    }
    ,{
        id: "8"
        ,label: "EPA 8"
        ,fill: false
        ,backgroundColor: Chart.helpers.color("rgba(54, 162, 235, 1)").alpha(0.5).rgbString()
        ,borderColor: "rgba(54, 162, 235, 1)"
        ,borderWidth: 1
        ,data: [
            3, 3, 4, 3, 4, 3, 2, 3, 3
        ]
    }
    ,{
        id: "9"
        ,label: "EPA 9"
        ,fill: false
        ,backgroundColor: Chart.helpers.color("rgba(255, 99, 132, 1)").alpha(0.5).rgbString()
        ,borderColor: "rgba(255, 99, 132, 1)"
        ,borderWidth: 1
        ,data: [
            4, 4, 4, 4, 4, 4, 4, 3, 3
        ]
    }
    ,{
        id: "10"
        ,label: "EPA 10"
        ,fill: false
        ,backgroundColor: Chart.helpers.color("rgba(255, 206, 86, 1)").alpha(0.5).rgbString()
        ,borderColor: "rgba(255, 206, 86, 1)"
        ,borderWidth: 1
        ,data: [
            3, 3, 3, 3, 3, 4, 4, 4, 4
        ]
    }
    ,{
        id: "11"
        ,label: "EPA 11"
        ,fill: false
        ,backgroundColor: Chart.helpers.color("rgba(54, 162, 235, 1)").alpha(0.5).rgbString()
        ,borderColor: "rgba(54, 162, 235, 1)"
        ,borderWidth: 1
        ,data: [
            4, 4, 4, 4, 4, 4, 4, 4, 4
        ]
    }
    ,{
        id: "12"
        ,label: "EPA 12"
        ,fill: false
        ,backgroundColor: Chart.helpers.color("rgba(75, 192, 192, 1)").alpha(0.5).rgbString()
        ,borderColor: "rgba(75, 192, 192, 1)"
        ,borderWidth: 1
        ,data: [
            2, 2, 3, 3, 3, 4, 4, 4, 4
        ]
    }
    ,{
        id: "13"
        ,label: "EPA 13"
        ,fill: false
        ,backgroundColor: Chart.helpers.color("rgba(153, 102, 255, 1)").alpha(0.5).rgbString()
        ,borderColor: "rgba(153, 102, 255, 1)"
        ,borderWidth: 1
        ,data: [
            2, 4, 3, 2, 3, 3, 3, 4, 3
        ]
    }
];

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
        ,datasets: defaultLineData
    }
    ,options: {
        title: {
            display: true
            ,text: "EPA Progress Over Time"
        }
        ,scales: {
            yAxes: [
                {
                    scaleLabel: {
                        display: true
                        ,labelString: "Level of Supervision"
                    }
                    ,ticks: {
                        min: 0
                        ,max: 5
                        ,callback: function(val) {
                            if(val == 0 || val == 5) {
                                return null;
                            }
                            return Number.isInteger(val) ? val : null;
                        }
                    }
                }
            ]
        }
        ,onClick: function(e) {
            var elem = line.getElementAtEvent(e);
            var ds = line.config.data.datasets[elem[0]._datasetIndex];
            var assessment = ds.data[elem[0]._index];
            //var assessment = ds.assessment[elem[0]._index];
            //AJAX call to get the assessment data.
            console.log(ds);
            console.log(assessment);
        }
    }
});
