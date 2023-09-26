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
                <article>
                    <h2>Spending - Last 7 days</h2>
                    <Bar data={state} options={options} />
                </article>
                <article className='pt-8 border-top-8 border-slate-200 block'>
                    <div className='text-left'>
                        <h3 className='text-base font-small block opacity-75'>
                            Total this month
                        </h3>
                        <p className>478.33</p>
                    </div>
                </article>
                <article className='flex items-end justify-end'>
                    <h3 className='text-base font-small block opacity-75'>
                        +2.4%
                    </h3>
                    <p>from last month</p>
                </article>
            </div>
        </>
    )
}