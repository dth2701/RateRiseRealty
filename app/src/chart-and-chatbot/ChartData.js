import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './ChartData.css'
import BarChartUI from './chart-switching/BarChartUI';
import LineChartUI from './chart-switching/LineChartUI';

const ChartData = ({ dataSet }) => {
  const [tab, setTab] = useState('bar');

  const changeTab = () => {
    setTab(tab === 'bar' ? 'line' : 'bar');
  };

  return (
    <div>
      {tab === 'bar' ? <BarChartUI dataSet={dataSet} /> : <LineChartUI dataSet={dataSet} />}
      <button className='switching-button' onClick={changeTab}>
        {tab === 'bar' ? 'Switch to Linear Chart' : 'Switch to Bar Chart'}
      </button>
    </div>
  );
};

export default ChartData;
