import React from "react";
import { Chart } from "react-google-charts";
const GoogleChart = ({ data }) => {
  return (
    <>
      <Chart
        chartType="AreaChart"
        data={data}
        width="100%"
        height="400px"
        legendToggle
      />
    </>
  );
};
export default GoogleChart;
