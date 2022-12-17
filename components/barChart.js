import React from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const data = {
  labels: ['QLache', 'Apollo Server', 'Quell', 'Dogs', 'Cats', 'TFT'],
  datasets: [
    {
      label: 'awesomeness',
      data: [20, 1, 2, 12, 17, 19],
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
};

export default () => ({
  displayName: 'How Awesome Are These Things',
  render() {
    return (
      <div>
        <Bar
          data={data}
          width={400}
          height={150}
          options={{
            maintainAspectRatio: true,
          }}
        />
      </div>
    );
  },
});
