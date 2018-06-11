var ctx = document.getElementById("programmingChart").getContext('2d');
Chart.defaults.global.defaultFontColor = 'black';
var programmingChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Python", "C#", "Java"],
        datasets: [{
            label: 'Programming Languages',
            data: [4, 4, 3],
            backgroundColor: [
                'rgb(170,200,220,75)',
                'rgb(222,184,180,75)',
                'rgb(248,176,160,75)',

            ],
            borderColor: [
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

