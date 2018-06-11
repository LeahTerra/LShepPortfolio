var ctx = document.getElementById("photoChart").getContext('2d');
Chart.defaults.global.defaultFontColor = 'black';
var photoChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Premiere", "Photoshop", "Illustrator"],
        datasets: [{
            label: 'Photo / Video',
            data: [3, 3, 2],
            backgroundColor: [
                'rgb(192,190,243,75)',
                'rgb(192,206,231,75)',
                'rgb(192,158,255,75)',

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
