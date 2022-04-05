import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../Title';

// Generate Gatherer Latency Data
function createData(refreshID: string, 
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
return { refreshID, browser_load, logon, acctsummary, acctdetail, cupalogwrite, summarylogwrite, tracelogwrite, validation, responsewrite };
}

const rows = [
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

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function GathererLatencyGrid() {
  return (
    <React.Fragment>
      <Title>Gatherer Refresh Latency</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Refresh ID</TableCell>
            <TableCell>Browser Load</TableCell>
            <TableCell>Logon</TableCell>
            <TableCell>Acct Summary</TableCell>
            <TableCell>Acct Detail</TableCell>
            <TableCell>Cupa Log</TableCell>
            <TableCell>Summary Log</TableCell>
            <TableCell>Trace Log</TableCell>
            <TableCell>Validation</TableCell>
            <TableCell>Response Write</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.refreshID}>
              <TableCell align="center">{row.refreshID}ms</TableCell>
              <TableCell align="center">{row.browser_load}ms</TableCell>
              <TableCell align="center">{row.logon}ms</TableCell>
              <TableCell align="center">{row.acctsummary}ms</TableCell>
              <TableCell align="center">{row.acctdetail}ms</TableCell>
              <TableCell align="center">{row.cupalogwrite}ms</TableCell>
              <TableCell align="center">{row.summarylogwrite}ms</TableCell>
              <TableCell align="center">{row.tracelogwrite}ms</TableCell>
              <TableCell align="center">{row.validation}ms</TableCell>
              <TableCell align="center">{row.responsewrite}ms</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more
      </Link>
    </React.Fragment>
  );
}