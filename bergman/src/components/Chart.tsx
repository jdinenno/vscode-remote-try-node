import * as React from 'react';
import { useTheme } from '@mui/material/styles';

import { LineChart, Line, XAxis, YAxis, Label, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import Title from './Title';

// Generate Sales Data
function createData(time: string, cache?: number, instant?: number, ipc?: number) {
  return { time, cache, instant, ipc };
}

const data = [
  createData('00:00', 2000, 1400, 1000),
  createData('03:00', 1700, 1400, 1100),
  createData('06:00', 1500, 1400, 1300),
  createData('09:00', 1650, 1400, 1020),
  createData('12:00', 1500, 1400, 1100),
  createData('15:00', 2000, 1400, 900),
  createData('18:00', 2400, 1400, 1000),
  createData('21:00', 2000, 1400, 900),
  createData('24:00', 2200, 1400, 1110),
];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Gatherer Average Refresh Latency</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Latency (ms)
            </Label>
          </YAxis>
          <Tooltip />
          <Legend />
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="cache"
            stroke='red'
            dot={false}
          /><Line
            isAnimationActive={false}
            type="monotone"
            dataKey="instant"
            stroke="orange"
            dot={false}
          /><Line
            isAnimationActive={false}
            type="monotone"
            dataKey="ipc"
            stroke="green"
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}