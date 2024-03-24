import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const BarChartUI = () => {
    
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
            type: 'bar',
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [{
                label: 'Sample Data',
                data: [12, 19, 3, 5, 2, 3, 15],
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
    
          // Store the chart instance in a ref
          chartInstanceRef.current = newChartInstance;
        }
      }, []);
    
  return (
    <canvas ref={chartRef} width="400" height="400"></canvas>
  )
}

export default BarChartUI