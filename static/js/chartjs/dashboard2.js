var bar = new Chart(document.querySelector("#stackedbarchart"), {
    type: "bar"
    ,data: {
        labels: [
             ["1", "Ambulatory Internal Medicine"]
            ,["2", "Clinical Performance Development 1A"]
            ,["3", "Clinical Performance Development 1B"]
            ,["4", "Clinical Performance Development 1C"]
            ,["5", "Emergency Medicine"]
            ,["6", "Emergency Medicine Clerkship"]
            ,["7", "Family Medicine Clerkship"]
            ,["8", "Geriatrics Clerkship"]
            ,["9", "Internal Medicine Clerkship"]
            ,["10", "Neurology Clerkship"]
            ,["11", "Obstetrics & Gynecology Clerkship"]
            ,["12", "Otolaryngology Subspecialty"]
            ,["13", "Pediatrics Clerkship"]
            ,["14", "Peri-Operative Medicine Clerkship"]
            ,["15", "Psychiatric Medicine Clerkship"]
            ,["16", "Surgery Clerkship"]
            ,["17", "Urology Subspecialty"]
        ]
        ,datasets: [
            {
                label: "Total EPA's Completed",
                data: [12, 19, 3, 5, 2, 3, 1, 1, 1, 10, 11, 15, 20, 4, 10, 10, 12],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }
            ,{
                label: "Total EPA's Requested",
                data: [8, 1, 17, 15, 18, 17, 19, 19, 19, 10, 9, 5, 0, 16, 10, 10, 8],
                backgroundColor: 'rgba(255, 159, 64, 0.2)',
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1
            }
        ]
    }
    ,options: {
        title: {
            display: true
            ,text: "EPA's Completed/Request by Department"
        }
        ,scales: {
            xAxes: [
                {
                    ticks:
                    {
                        autoSkip: false
                        ,maxRotation: 90
                        ,minRotation: 90
                        ,fontSize: 16
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
    ,"14": [10, 50, 10]
    ,"15": [85, 6, 2]
    ,"16": [95, 1, 1]
    ,"17": [65, 14, 5]
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
