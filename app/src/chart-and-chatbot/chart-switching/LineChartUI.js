import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const dataAustin = [
  { "Year": 2015, "Price": 883 },
  { "Year": 2016, "Price": 902 },
  { "Year": 2017, "Price": 968 },
  { "Year": 2018, "Price": 1023 },
  { "Year": 2019, "Price": 1086 },
  { "Year": 2020, "Price": 1134 },
  { "Year": 2021, "Price": 1212 },
  { "Year": 2022, "Price": 1236 },
  { "Year": 2023, "Price": 1386 },
  { "Year": 2024, "Price": 1635 },
  { "Year": 2025, "Price": "" }
];

const dataDallas = [
  { "Year": 2015, "Price": 690 },
  { "Year": 2016, "Price": 718 },
  { "Year": 2017, "Price": 770 },
  { "Year": 2018, "Price": 838 },
  { "Year": 2019, "Price": 853 },
  { "Year": 2020, "Price": 945 },
  { "Year": 2021, "Price": 1021 },
  { "Year": 2022, "Price": 1064 },
  { "Year": 2023, "Price": 1234 },
  { "Year": 2024, "Price": 1384 },
  { "Year": 2025, "Price": "" }
];

const dataFortWorth = [
  { "Year": 2015, "Price": 743 },
  { "Year": 2016, "Price": 773 },
  { "Year": 2017, "Price": 797 },
  { "Year": 2018, "Price": 871 },
  { "Year": 2019, "Price": 907 },
  { "Year": 2020, "Price": 908 },
  { "Year": 2021, "Price": 983 },
  { "Year": 2022, "Price": 1014 },
  { "Year": 2023, "Price": 1095 },
  { "Year": 2024, "Price": 1135 },
  { "Year": 2025, "Price": "" }
];

const dataHouston = [
  { "Year": 2015, "Price": 695 },
  { "Year": 2016, "Price": 739 },
  { "Year": 2017, "Price": 768 },
  { "Year": 2018, "Price": 801 },
  { "Year": 2019, "Price": 844 },
  { "Year": 2020, "Price": 851 },
  { "Year": 2021, "Price": 912 },
  { "Year": 2022, "Price": 961 },
  { "Year": 2023, "Price": 1057 },
  { "Year": 2024, "Price": 1197 },
  { "Year": 2025, "Price": "" }
];

const dataSanAntonio = [
  { "Year": 2015, "Price": 695 },
  { "Year": 2016, "Price": 739 },
  { "Year": 2017, "Price": 768 },
  { "Year": 2018, "Price": 801 },
  { "Year": 2019, "Price": 844 },
  { "Year": 2020, "Price": 851 },
  { "Year": 2021, "Price": 912 },
  { "Year": 2022, "Price": 961 },
  { "Year": 2023, "Price": 1057 },
  { "Year": 2024, "Price": 1197 },
  { "Year": 2025, "Price": "" }
];

const LineChartUI = () => { 
  const [selectedDataIndex, setSelectedDataIndex] = useState(0); // State to track selected dataset index
const datasets = [dataAustin, dataDallas, dataFortWorth, dataHouston, dataSanAntonio]; // Array of datasets
const datasetLabels = ['Austin', 'Dallas', 'Fort Worth', 'Houston', 'San Antonio']; // Labels for datasets
const [searchQuery, setSearchQuery] = useState(''); // State for search query

const chartRef = useRef(null);
const chartInstanceRef = useRef(null);

   // Function to handle search query change
   const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // If search query matches a dataset label, select that dataset
    const index = datasetLabels.findIndex(label => label.toLowerCase().includes(e.target.value.toLowerCase()));
    if (index !== -1) {
      setSelectedDataIndex(index);
    }
  };

  useEffect(() => {
    if (chartRef && chartRef.current) {
      if (chartInstanceRef.current) {
        // If chart instance exists, destroy it before creating a new one
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');
      const selectedData = datasets[selectedDataIndex]; // Get the selected dataset
      const years = selectedData.map(entry => entry.Year);
      const prices = selectedData.map(entry => entry.Price);

        // Predicted price for 2025
        const lastYearPrice = selectedData[selectedData.length - 2].Price; // Last year's price
        const predictedPrice2025 = lastYearPrice ? Math.round(lastYearPrice * 1.2) : null; // Increase by 20% and round
  
        // Append predicted price to the dataset
        const updatedPrices = [...prices];
        updatedPrices[updatedPrices.length - 1] = predictedPrice2025;
  
         // Background color for bars
         const backgroundColors = years.map(year => {
          return year === 2025 ? '#6e48aa' : 'rgba(54, 162, 235, 0.2)';
        });
  
        // Border color for bars
        const borderColors = years.map(year => {
          return year === 2025 ? '#6e48aa' : 'rgba(54, 162, 235, 1)';
        });

      const newChartInstance = new Chart(ctx, {
        type: 'line',
        data: {
          labels: years,
          datasets: [{
            label: 'Price',
            data: updatedPrices,
            backgroundColor: backgroundColors,
            borderColor: borderColors,
            borderWidth: 3
          },
          {
            label: 'Prediction Price',
            backgroundColor: '#6e48aa', // Example color for prediction price bars
            borderColor: '#6e48aa', // Example border color for prediction price bars
            borderWidth: 1
        }
        ]},
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
  }, [selectedDataIndex]);

  const switchData = () => {
    setSelectedDataIndex((selectedDataIndex + 1) % datasets.length); // Cycle through datasets
  };


  return (
    <div>
         <input type='text' placeholder='Search city you want ... ' value={searchQuery} onChange={handleSearch} 
      className='search-city'/>
      <button onClick={switchData} className='switching-button'>Switch City</button>
      <h2>{`Showing data for: ${datasetLabels[selectedDataIndex]}`}</h2>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
}

export default LineChartUI;
