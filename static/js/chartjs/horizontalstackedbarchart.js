var bar = new Chart(document.querySelector("#stackedbarchart"), {
    type: "horizontalBar"
    ,data: {
        labels: [["1", "Susie Smith"], ["2", "John Jones"], ["3", "Bruce Wayne"], ["4", "Clark Kent"],["5", "Arthur Curry"], ["6", "Wilson Wilson"], ["7", "Mina Harker"], ["8", "Barry Allen"], ["9", "Wally West"], ["10", "Meg Murry"], ["11", "Alice Kingsleigh"], ["12", "Ada Lovelace"], ["13", "Mary Wollstonecraft"]]
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
                    ticks: {
                        max: 25
                    }
                    ,stacked: true
                }
            ]
            ,yAxes: [
                {
                    ticks:
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
        }
        ,onClick: function(e) {
            var elem = bar.getElementAtEvent(e);
            var student = bar.config.data.labels[elem[0]._index][0];
            //Send to the dashboard details with the student ID
            document.location.href = "dashboard.html";
        }
    }
});
