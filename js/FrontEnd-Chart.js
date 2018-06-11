var ctx = document.getElementById("myChart").getContext('2d');
Chart.defaults.global.defaultFontColor = 'black';
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["HTML", "CSS", "Bootstrap", "Javascript", "React", "Angular"],
        datasets: [{
            label: 'Front End / Scripting',
            data: [4, 3, 3, 2.5, 2, 3],
            backgroundColor: [
                'rgb(192,190,243,75)',
                'rgb(202,227,224,75)',
                'rgb(208,217,227,75)',
                'rgb(216,207,227,75)',
                'rgb(236,183,234,75)',
                'rgb(183,236,184,75)',
                'rgb(236,183,234,75)',

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

