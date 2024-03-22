let skillChart = document.getElementById("skill-chart");

let chart = new Chart(skillChart, {
    data: {
        datasets: [{
            type: 'bar',
            label: 'Bar Dataset',
            data: [10, 20, 30, 40]
        }, {
            type: 'line',
            label: 'Line Dataset',
            data: [50, 50, 50, 50],
        }],
        labels: ['January', 'February', 'March', 'April']
    }
});