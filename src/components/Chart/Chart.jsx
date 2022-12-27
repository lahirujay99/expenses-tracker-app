import React from 'react';
import ChartBar from './ChartBar';
import './Chart.css';

function Chart(props) {
  const dataPointValues = props.datapoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => {
        return (
          <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={totalMaximum}
            label={datapoint.label}
          />
        );
      })}
    </div>
  );
}

export default Chart;
