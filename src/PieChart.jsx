import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const data = {
labels: ['Сон', 'Образование', 'Домашние дела', 'Куда тратится остальное время???'],
datasets: [
    {
    label: '24 часа',
    data: [6, 5, 5, 8],
    backgroundColor: ['#6A5ACD', '#00CED1', '#FFD700', '#FF6347'],
    borderColor: '#fff',
    borderWidth: 2,
    },
],
};

const options = {
plugins: {
    legend: {
    position: 'bottom',
    labels: {
        font: {
        size: 14,
        family: 'Arial',
        weight: 'bold',
        },
        color: '#333',
    },
    },
    datalabels: {
    color: '#fff',
    font: {
        size: 16,
        weight: 'bold',
    },
    anchor: 'center',
    align: 'center',
    formatter: (value) => `${value} ч`,
    },
},
};

const PieChart = () => {
return <Pie data={data} options={options} />;
};

export default PieChart;

