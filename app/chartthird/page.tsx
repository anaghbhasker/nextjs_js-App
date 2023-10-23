"use client"
import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

export default function page() {
    const data = [
        { value: 25, label: 'A' },
        { value: 75, label: 'B' },
        // { value: 15, label: 'C' },
        // { value: 20, label: 'D' },
      ];
      
      const size = {
        width: 600,
        height: 230,
      };
      
      const StyledText = styled('text')(({ theme }) => ({
        fill: theme.palette.text.primary,
        textAnchor: 'middle',
        dominantBaseline: 'central',
        fontSize: 20,
      }));
      
      function PieCenterLabel({ children }: { children: React.ReactNode }) {
        const { width, height, left, top } = useDrawingArea();
        return (
          <StyledText x={left + width / 2} y={top + height / 2}>
            {children}
          </StyledText>
        );
      }
  return (
    <PieChart series={[{ data, innerRadius: 80 }]} {...size}>
      <PieCenterLabel>Total</PieCenterLabel>
    </PieChart>
  )
}
