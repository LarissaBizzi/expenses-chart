import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale } from 'chart.js';
import { BarElement, Title, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export function Chart() {
    const state = {
        labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
        datasets: [
            {
                label: "Spendind - last 7 days",
                backgroundColor: 'hsl(10, 79%, 65%)',
                hoverBackgroundColor: 'hsl(186, 34%, 60%)',
                data: [17.45, 34.91, 52.36, 31.07, 23.39, 43.28, 25.48],
                borderRadius: 8,
            },
        ],
    }
    return (
        <>
            <div className="table">
                <Bar data={state} />
                <h3>Total this month</h3>
                <h2>$478.33</h2>
                <p>+2.4%</p>
                <p>from last month</p>
            </div>
        </>
    )
}