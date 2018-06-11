var ctx = document.getElementById("conceptChart").getContext('2d');
Chart.defaults.global.defaultFontColor = 'black';
var conceptChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["OOP", "Time Complexity", "Storage Structures", "Recursion"],
        datasets: [{
            label: 'Concepts',
            data: [4, 3, 3, 3],
            backgroundColor: [
                'rgb(202,220,255,75)',
                'rgb(205,231,244,75)',
                'rgb(208,243,232,75)',
                'rgb(174,233,255,75)',

            ],
            borderColor: [
                'white',
                'white',
                'white',
                'white',
                'white',
                'white',
                'white',
                'white',
            ],
            borderWidth: 2
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    min: '',
                    fontSize: 15,
                    callback: function(value) {
                        if (value === 0)
                            return '';
                        else if (value === 1)
                            return 'Beginner';
                        else if (value === 2)
                            return 'Improving';
                        else if (value === 3)
                            return 'Proficient';
                        else if (value === 4)
                            return 'Expert';
                        else if (value === 5)
                            return 'Master';
                        
                        else
                            return '';
                    }
                }
                
                
            }],
            xAxes: [{
                ticks: {
                    fontSize: 15,
                }
            }]
        }
    }
});

