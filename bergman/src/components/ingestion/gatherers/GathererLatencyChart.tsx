import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Title from '../../Title';


function createData(name: string, 
                    browser_load?: number, 
                    logon?: number, 
                    acctsummary?: number,
                    acctdetail?: number,
                    cupalogwrite?: number,
                    summarylogwrite?: number,
                    tracelogwrite?: number,
                    validation?: number,
                    responsewrite?: number
                    ) {
  return { name, browser_load, logon, acctsummary, acctdetail, cupalogwrite, summarylogwrite, tracelogwrite, validation, responsewrite };
}

const data = [
  createData('Refresh A', 2800, 2800, 2800, 2800, 1800, 280, 280, 280, 528),
  createData('Refresh B', 3000, 3000, 3000, 3000, 1000, 300, 300, 300, 530),
  createData('Refresh C', 2000, 2000, 2000, 2000, 1000, 200, 200, 200, 520),
  createData('Refresh D', 1500, 1500, 1500, 1500, 1500, 150, 150, 150, 515),
  createData('Refresh E', 2500, 2500, 2500, 2500, 1500, 250, 250, 250, 525),
  createData('Refresh F', 2000, 2000, 2000, 2000, 1000, 200, 200, 200, 520),
  createData('Refresh G', 2400, 2400, 2400, 2400, 1400, 240, 240, 240, 524),
  createData('Refresh H', 3300, 3300, 3300, 3300, 1300, 330, 330, 330, 533),
  createData('Refresh I', 2300, 2300, 2300, 2300, 1300, 230, 230, 230, 523),
];


export default function GathererLatencyChart() {
  const theme = useTheme();
  const clickMe = (payload: any, value: number) => {
    alert( JSON.stringify(payload));
  }
  return (
    <React.Fragment>
      <Title>Gatherer Refresh Latency</Title>
      <ResponsiveContainer>
        <BarChart
          width={800}
          height={800}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2} />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <Tooltip />
          <Legend />
          <Bar dataKey="browser_load" stackId="a" fill="orange" stroke={theme.palette.primary.main} />
          <Bar dataKey="logon" stackId="a" fill="#8884d8" stroke={theme.palette.primary.main} />
          <Bar onClick={(d,i)=>alert(`purple ${i}`)} dataKey="acctsummary" stackId="a" fill="#82ca9d" stroke={theme.palette.primary.main} />
          <Bar onClick={(payload, index) => {clickMe(payload, index); }} dataKey="acctdetail" stackId="a" fill="blue" stroke={theme.palette.primary.main} />
          <Bar dataKey="cupalogwrite" stackId="a" fill="purple" stroke={theme.palette.primary.main} />
          <Bar dataKey="summarylogwrite" stackId="a" fill="teal" stroke={theme.palette.primary.main} />
          <Bar dataKey="tracelogwrite" stackId="a" fill="green" stroke={theme.palette.primary.main} />
          <Bar dataKey="validation" stackId="a" fill="red" stroke={theme.palette.primary.main} />
          <Bar dataKey="responsewrite" stackId="a" fill="pink" stroke={theme.palette.primary.main} />
        </BarChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}