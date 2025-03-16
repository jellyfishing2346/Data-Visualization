// Dataset
const habitsData = {
    labels: ["Eating", "Exercising", "Screen Time", "Sleep"],
    healthy: [80, 70, 40, 90], // Percentage of healthy habits
    unhealthy: [20, 30, 60, 10] // Percentage of unhealthy habits
};

// Doughnut Chart
const doughnutChartCtx = document.getElementById('doughnutChart').getContext('2d');

const doughnutChart = new Chart(doughnutChartCtx, {
    type: 'doughnut',
    data: {
        labels: ["Healthy Habits", "Unhealthy Habits"],
        datasets: [{
            label: 'Percentage',
            data: [
                habitsData.healthy.reduce((a, b) => a + b, 0) / habitsData.healthy.length, // Average healthy habits
                habitsData.unhealthy.reduce((a, b) => a + b, 0) / habitsData.unhealthy.length // Average unhealthy habits
            ],
            backgroundColor: ['#4BC0C0', '#FF6384'],
            hoverOffset: 4
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Overall Healthy vs Unhealthy Habits (Doughnut Chart) - Deepseek-V3',
                font: {
                    size: 16
                }
            }
        }
    }
});

// Horizontal Bar Chart
const horizontalBarChartCtx = document.getElementById('horizontalBarChart').getContext('2d');

const horizontalBarChart = new Chart(horizontalBarChartCtx, {
    type: 'bar',
    data: {
        labels: habitsData.labels,
        datasets: [
            {
                label: 'Healthy Habits (%)',
                data: habitsData.healthy,
                backgroundColor: '#4BC0C0',
                borderColor: '#4BC0C0',
                borderWidth: 1
            },
            {
                label: 'Unhealthy Habits (%)',
                data: habitsData.unhealthy,
                backgroundColor: '#FF6384',
                borderColor: '#FF6384',
                borderWidth: 1
            }
        ]
    },
    options: {
        indexAxis: 'y', // Makes the bar chart horizontal
        plugins: {
            title: {
                display: true,
                text: 'Healthy vs Unhealthy Habits by Category (Horizontal Bar Chart)',
                font: {
                    size: 16
                }
            }
        },
        scales: {
            x: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});