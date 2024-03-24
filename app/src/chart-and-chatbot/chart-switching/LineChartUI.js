import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const LineChartUI = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstanceRef.current) {
        // If chart instance exists, destroy it before creating a new one
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      const newChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
          datasets: [{
            label: 'Sample Data',
            data: [12, 19, 3, 5, 2, 3, 15, 10],
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Store the chart instance in a ref
      chartInstanceRef.current = newChartInstance;
    }
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
}

export default LineChartUI;
