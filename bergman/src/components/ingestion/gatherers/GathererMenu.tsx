import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ContactPhone from '@mui/icons-material/ContactPhone';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import Title from '../../Title';
import { Code } from '@mui/icons-material';

export default function GathererMenu() {


  return (
    <React.Fragment>
      <List component="nav">
        <ListItemButton>
          <Title>Gatherers</Title>
        </ListItemButton>
        <Divider sx={{ my: 1 }} />
        <Link style={{ textDecoration: 'none'}} to="/Ingestion/Gatherer">
          <ListItemButton>
            <ListItemIcon>
              <Code />
            </ListItemIcon>
            <ListItemText primary="Site Config" />
          </ListItemButton>
        </Link>
        <Divider sx={{ my: 1 }} />
        <Link style={{ textDecoration: 'none'}} to="/Ingestion/Gatherer">
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Latency" />
          </ListItemButton>
        </Link>
        <ListItemButton>
          <ListItemIcon>
            <ContactPhone />
          </ListItemIcon>
          <ListItemText primary="Source Status" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Cobrand Status" />
        </ListItemButton>
        <Divider sx={{ my: 1 }} />

        <ListSubheader component="div">
          Actions
        </ListSubheader>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Refresh ItemID" />
        </ListItemButton>
      </List>
    </React.Fragment>
  );
}