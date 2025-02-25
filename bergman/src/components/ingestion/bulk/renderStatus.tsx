import * as React from 'react';
import clsx from 'clsx';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import InfoIcon from '@mui/icons-material/Info';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import DoneIcon from '@mui/icons-material/Done';
import Chip from '@mui/material/Chip';
import { GridCellParams } from '@mui/x-data-grid-pro';
import { createTheme } from '@mui/material/styles';
import { createStyles, makeStyles } from '@mui/styles';

const defaultTheme = createTheme();
const useStyles = makeStyles(
  (theme) =>
    createStyles({
      root: {
        justifyContent: 'left',
        '& .icon': {
          color: 'inherit',
        },
      },
      Initializing: {
        color: theme.palette.info.dark,
        border: `1px solid ${theme.palette.info.main}`,
      },
      Completed: {
        color: theme.palette.success.dark,
        border: `1px solid ${theme.palette.success.main}`,
      },
      Running: {
        color: theme.palette.warning.dark,
        border: `1px solid ${theme.palette.warning.main}`,
      },
      Failed: {
        color: theme.palette.error.dark,
        border: `1px solid ${theme.palette.error.main}`,
      },
    }),
  { defaultTheme },
);

type Statuses = keyof ReturnType<typeof useStyles>;

interface StatusProps {
  status: Statuses;
}

const Status = React.memo((props: StatusProps) => {
  const { status } = props;
  let icon: any = null;
  const classes = useStyles();
  if (status === 'Failed') {
    icon = <ReportProblemIcon className="icon" />;
  } else if (status === 'Initializing') {
    icon = <InfoIcon className="icon" />;
  } else if (status === 'Running') {
    icon = <AutorenewIcon className="icon" />;
  } else if (status === 'Completed') {
    icon = <DoneIcon className="icon" />;
  }
  let label: string = status;
  
  return (
    <Chip
      className={clsx(classes.root, classes[status])}
      icon={icon}
      size="small"
      label={label}
      variant="outlined"
    />
  );
});

export function renderStatus(params: GridCellParams) {
  return <Status status={params.value!.toString() as Statuses} />;
}