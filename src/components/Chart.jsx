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
                    <h3>
                        <span className='text-base font-normal block opacity-75'>
                            Total this month
                        </span>$478.33
                    </h3>
                    <h3 className='flex items-end justify-end flex-col'>
                        <span className='font-bold block'>+2.4%</span>
                        from last month
                    </h3>
                </article>
            </div>
        </>
    )
}