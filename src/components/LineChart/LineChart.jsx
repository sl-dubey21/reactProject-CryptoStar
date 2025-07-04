import React, { useEffect, useState } from 'react';
import Chart from 'react-google-charts';

const LineChart = ({ HistoricalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Prices"]];
    if (HistoricalData?.prices) {
      HistoricalData.prices.forEach(item => {
        const date = new Date(item[0]).toLocaleDateString().slice(0,-5);
        const price = item[1];
        dataCopy.push([date, price]);
      });
      setData(dataCopy);
    }
  }, [HistoricalData]);

  return (
    <Chart
      chartType='LineChart'
      data={data}
      height="100%"
      legendToggle
    />
  );
};

export default LineChart;
