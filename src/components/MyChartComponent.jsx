import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const MyChartComponent = (props) => {
  const dataset = props['dataset'];
  let [selectedRange, setSelectedRange] = useState('yearly');
  console.log(props['dataset']);

  let graphData = [];
  let graphValue = [];

  if(selectedRange=='monthly')
  {
    graphValue.splice(0,graphValue.length);
    graphData.splice(0,graphValue.length);
    for(let i=0;i<props['dataset']['months']['0'].length;i++)
    {
      if(i>=(props['dataset']['months']['0'].length)/2)
      graphValue.push(props['dataset']['months']['0'][i])
    }
    for(let i=0;i<props['dataset']['months']['1'].length;i++)
    {
      if(i>=(props['dataset']['months']['1'].length)/2)
      graphData.push(props['dataset']['months']['1'][i])
    }
  }
  else if(selectedRange=='quarterly')
  {
    graphValue.splice(0,graphValue.length);
    graphData.splice(0,graphValue.length);
    props['dataset']['quarters']['0'].forEach(element => {
      graphValue.push(element)
    });
    props['dataset']['quarters']['1'].forEach(element => {
      graphData.push(element)
    });
  }
  else if(selectedRange=='yearly')
  {
    graphValue.splice(0,graphValue.length);
    graphData.splice(0,graphValue.length);
    props['dataset']['years']['0'].forEach(element => {
      graphValue.push(element)
    });
    props['dataset']['years']['1'].forEach(element => {
      graphData.push(element)
    });
  }

  const data = {
    labels: graphValue,
    datasets: [
      {
        label: 'Profit',
        data:graphData,
        fill: false,
        borderColor: 'rgb(255, 191, 0)',
        tension: .4,
      },
    ],
  };

  const chartOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
        },
        beginAtZero: false,
      },
    },
    responsive: true,
  };
  const containerStyles = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  };

  const selectStyles = {
    padding: '7px',
    fontSize: '16px',
    marginBottom: '10px',
    borderRadius: '15px',
    backgroundColor: 'white',
    fontFamily: 'Inter',
    fontSize: '14px',
  };
  
  return (
    <div style={containerStyles}>
      <Line data={data} height="200px" options={chartOptions} />
      <select style={selectStyles} value={selectedRange} onChange={e => setSelectedRange(e.target.value)}>
        <option value="yearly">Yearly</option>
        <option value="quarterly">Quarterly</option>
        <option value="monthly">Monthly</option>
      </select>
    </div>
  );
};

export default MyChartComponent;
