import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import styles from './barChart.module.css'

function BarChart(props){
  const chartInfo = {
    // labels correspond to array index + 1 so that they start at 1
    labels: Object.keys(props.data).map((el) => String(Number(el) + 1)),
    datasets: [
      {
        label: 'Response Time',
        data: props.data,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          // 'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          // 'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles.container}>
      <Bar
        data={chartInfo}
        width={400}
        height={150}
        options={{
          maintainAspectRatio: true,
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Call number',
                padding: {
                  top: 10,
                  bottom: 0,
                }
              }
            },
            y: {
              title: {
                display: true,
                text: 'Response Time in ms',
                padding: {
                  top: 0,
                  bottom: 10,
                }
              }
            }
          }
        }}
      />
    </div>
  );
}

export default BarChart
