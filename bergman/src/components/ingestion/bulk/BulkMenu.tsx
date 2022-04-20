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
import Title from '../../Title';
import { Link } from 'react-router-dom';

export default function BulkMenu() {


  return (
    <React.Fragment>
      <List component="nav">
      <ListItemButton>
          <Title>Bulk Files</Title>
        </ListItemButton>
        <Divider sx={{ my: 1 }} />
        <Link style={{ textDecoration: 'none'}} to="/Ingestion/Bulk/Status">
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Pipeline" />
          </ListItemButton>
        </Link>
        <ListItemButton>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Status" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ContactPhone />
          </ListItemIcon>
          <ListItemText primary="Browser" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="SLA Status" />
        </ListItemButton>
        
        <Divider sx={{ my: 1 }} />

        <ListSubheader component="div" inset>
          Saved reports
        </ListSubheader>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Current month" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Last quarter" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Year-end sale" />
        </ListItemButton>

      </List>
    </React.Fragment>
  );
}