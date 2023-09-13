import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale } from 'chart.js';
import { BarElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export function Chart() {
    const state = {
        labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        datasets: [
            {
                backgroundColor: 'hsl(10, 79%, 65%)',
                hoverBackgroundColor: 'hsl(186, 34%, 60%)',
                data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
                borderRadius: 6,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                grid: {
                    display: false,
                },
            },
        },
    };

    return (
        <>
            <div className="table">
                <h2>Spending - Last 7 days</h2>
                <Bar data={state} options={options} />
                <h3>Total this month</h3>
                <h4 style={{ fontSize: 24 }}>$478.33</h4>
                <p>+2.4%</p>
                <h5>from last month</h5>
            </div>
        </>
    )
}