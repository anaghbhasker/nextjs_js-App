// components/CustomDonutChart.tsx

import React from 'react';
import './Style.css'

interface DonutSegment {
  label: string;
  value: number;
  color?: string;
  isEmpty?: boolean;
}

interface CustomDonutChartProps {
  data: DonutSegment[];
  size?: string;
}

const CustomDonutChart: React.FC<CustomDonutChartProps> = ({ data, size = '' }) => {
  return (
    <div className="custom-donut-chart" style={{ width: size, height: size }}>
      {data.map((segment, index) => (
        <div
          className={`segment ${segment.isEmpty ? 'empty' : ''}`}
          style={{
            borderWidth: `${segment.value}%`,
            borderColor: segment.color || '#3366FF',
          }}
          key={index}
        ></div>
      ))}
    </div>
  );
};

export default CustomDonutChart;
