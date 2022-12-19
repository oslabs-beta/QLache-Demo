import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import styles from './barChart.module.css'

function BarChart(props){
  const chartInfo = {
    labels: Object.keys(props.data).map((el) => String(Number(el) + 1)),
    datasets: [
      {
        label: 'awesomeness',
        data: props.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }
  return (
    <div className={styles.container}>
      <Bar
        data={chartInfo}
        width={400}
        height={150}
        options={{
          maintainAspectRatio: true,
        }}
      />
    </div>
  );
}

export default BarChart
