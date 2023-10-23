import React from 'react'
import styles from './Style.module.css'


interface CircularProgressBarProps {
    percentage: number;
}

const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ percentage }) => {
    const radius = 50; // Set the radius of the circle
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
  
    return (
      <div className={styles.circularProgressBar}>
        <svg width="100" height="100">
          <circle
            r={radius}
            cx="50"
            cy="50"
            stroke="#ccc" // Grey background color
            strokeWidth="10" // Stroke width
            fill="transparent"
          />
          <circle
            r={radius}
            cx="50"
            cy="50"
            stroke="#007BFF" // Blue progress color
            strokeWidth="10"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
          />
        </svg>
        <div className={styles.percentage}>{percentage}%</div>
      </div>
    );
  };
  
  export default CircularProgressBar;