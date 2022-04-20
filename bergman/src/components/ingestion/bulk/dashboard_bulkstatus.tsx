import * as React from 'react';
import {
  DataGrid,
  GridActionsCellItem,
  GridRowId,
  GridColumns,
} from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import SecurityIcon from '@mui/icons-material/Security';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { randomCreatedDate, randomUpdatedDate } from '@mui/x-data-grid-generator';
import { renderProgress } from './renderProgress';
import { renderStatus } from './renderStatus';

const data = [
  {
    id: 1,
    jobName: 'Wheelhouse- Market Data Load',
    startTime: '12:00am',
    progress: 1,
    jobStatus: 'Completed',
    dateCreated: randomCreatedDate(),
    lastSuccess: randomUpdatedDate(),
    enabled: true,
  },
  {
    id: 2,
    jobName: 'Wheelhouse- Reference Data Load',
    startTime: '12:00am',
    progress: .62,
    jobStatus: 'Running',
    dateCreated: randomCreatedDate(),
    lastSuccess: randomUpdatedDate(),
    enabled: true,
  },
  {
    id: 3,
    jobName: 'Cobrand1 - UMP Data Load',
    startTime: '12:00am',
    progress: .75,
    jobStatus: 'Failed',
    dateCreated: randomCreatedDate(),
    lastSuccess: randomUpdatedDate(),
    enabled: false,
  },
  {
    id: 4,
    jobName: 'Cobrand1 - Salesforce Data Load',
    startTime: '12:00am',
    progress: 0,
    jobStatus: 'Initializing',
    dateCreated: randomCreatedDate(),
    lastSuccess: randomUpdatedDate(),
    enabled: false,
  },
];

type Row = typeof data[number];

export default function DashboardBulkStatus() {
  const [rows, setRows] = React.useState<Row[]>(data);

  const deleteUser = React.useCallback(
    (id: GridRowId) => () => {
      setTimeout(() => {
        setRows((prevRows) => prevRows.filter((row) => row.id !== id));
      });
    },
    [],
  );

//   const toggleAdmin = React.useCallback(
//     (id: GridRowId) => () => {
//       setRows((prevRows) =>
//         prevRows.map((row) =>
//           row.id === id ? { ...row, enabled: !row.enabled } : row,
//         ),
//       );
//     },
//     [],
//   );

//   const duplicateUser = React.useCallback(
//     (id: GridRowId) => () => {
//       setRows((prevRows) => {
//         const rowToDuplicate = prevRows.find((row) => row.id === id)!;
//         return [...prevRows, { ...rowToDuplicate, id: Date.now() }];
//       });
//     },
//     [],
//   );

  const columns = React.useMemo<GridColumns<Row>>(
    () => [
      { field: 'jobName', headerName: 'Job Name',type: 'string', width: 350 },
      { field: 'startTime', headerName: 'Start Time',type: 'string' },
      { field: 'progress', headerName: 'Progress', type: 'number', renderCell: renderProgress },
      { field: 'jobStatus', headerName: 'Status', type: 'string', width: 130, renderCell: renderStatus},
      { field: 'dateCreated', type: 'date', width: 130 },
      { field: 'lastSuccess', type: 'dateTime', width: 180 },
      { field: 'enabled', type: 'boolean', width: 80 },
    //   {
    //     field: 'country',
    //     type: 'singleSelect',
    //     width: 120,
    //     valueOptions: [
    //       'Bulgaria',
    //       'Netherlands',
    //       'France',
    //       'United Kingdom',
    //       'Spain',
    //       'Brazil',
    //     ],
    //   },
    //   {
    //     field: 'discount',
    //     type: 'singleSelect',
    //     width: 120,
    //     editable: true,
    //     valueOptions: ({ row }) => {
    //       if (row === undefined) {
    //         return ['EU-resident', 'junior'];
    //       }
    //       const options: string[] = [];
    //       if (!['United Kingdom', 'Brazil'].includes(row.country)) {
    //         options.push('EU-resident');
    //       }
    //       if (row.age < 27) {
    //         options.push('junior');
    //       }
    //       return options;
    //     },
    //   },
      {
        field: 'actions',
        type: 'actions',
        width: 80,
        getActions: (params) => [
          <GridActionsCellItem
            icon={<DeleteIcon />}
            label="Delete"
            onClick={deleteUser(params.id)}
          />,
          <GridActionsCellItem
            icon={<SecurityIcon />}
            label="Rerun Job"
            onClick={()=> alert('rerunning job')}
            showInMenu
          />,
          <GridActionsCellItem
            icon={<FileCopyIcon />}
            label="View Logs"
            onClick={()=> alert('loading job log')}
            showInMenu
          />,
        ],
      },
    ],
    [deleteUser],
  );

  return (
    <div style={{ height: 800, width: '100%' }}>
      <DataGrid columns={columns} rows={rows} 
        initialState={{
        
        sorting: {
            sortModel: [{ field: 'progress', sort: 'asc' }],
        },
        }}
      />
    </div>
  );
}
