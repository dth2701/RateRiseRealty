import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import './ChartData.css'
import BarChartUI from './chart-switching/BarChartUI';
import LineChartUI from './chart-switching/LineChartUI';

const ChartData = () => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);
  const [tab, setTab] = useState('bar')

  const changeTab = () => {
    if (tab === 'bar') {
      setTab('line')
    } else {
      setTab('bar')
    }
  }


  return (
    <div>
      {tab === 'bar' ? <BarChartUI /> : <LineChartUI />}
      <button className='swicthing-button' onClick={changeTab}>
        {tab === 'bar' ? 'Switch to Linear Chart' : 'Switch to Bar Chart'}
      </button>
    </div>
  );
}

export default ChartData;
