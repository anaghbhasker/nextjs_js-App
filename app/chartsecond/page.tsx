import React from 'react'
import CustomDonutChart from './donutChart';

export default function page() {
  const chartData = [
    {
      label: "Give you up",
      value: 200,
      color: "#FF5733",
    },
    {
      label: "balance",
      value: 80,
      color: "#33FF33",
    },
  ];
  return (
    <div>
      <h1>Custom Donut Chart Example</h1>
      <CustomDonutChart  data={chartData} size=""/>
    </div>
  )
}
