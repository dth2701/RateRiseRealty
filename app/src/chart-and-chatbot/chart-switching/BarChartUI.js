import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChartUI = ({ dataSet }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && dataSet) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      const newChartInstance = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: dataSet.map(item => item.Year.toString()),
          datasets: [{
            label: 'Price',
            data: dataSet.map(item => item.Price),
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
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

      chartInstanceRef.current = newChartInstance;
    }
  }, [dataSet]); // Re-run when dataSet changes

  return (
    <canvas ref={chartRef} width="400" height="400"></canvas>
  );
};

export default BarChartUI;
