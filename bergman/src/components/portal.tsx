import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GathererMenu from './ingestion/gatherers/GathererMenu';
import Dashboard from './ingestion/gatherers/dashboard';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ListItemIcon from '@mui/material/ListItemIcon';
import { Api, Code, CurrencyExchange, ErrorOutline, LibraryBooks } from '@mui/icons-material';
import ListItemText from '@mui/material/ListItemText';
import DashboardBulk from './ingestion/bulk/dashboard_bulk';
import DashboardBulkStatus from './ingestion/bulk/dashboard_bulkstatus';
import { Link, Route, Routes } from 'react-router-dom';
import Placeholder from './ingestion/Placeholder';
import BulkMenu from './ingestion/bulk/BulkMenu';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" to="https://mui.com/">
        GatorData
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function PortalContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openmenu = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }
  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>

            <Box color="inherit" sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button
                key="Ingestion"
                id="basic-button-ingestion"
                aria-controls={open ? 'basic-menu-ingestion' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, width: 100, color: "white", display: "block" }}
              >
                Ingestion
              </Button>
              <Menu
                id="basic-menu-ingestion"
                anchorEl={anchorEl}
                open={openmenu && anchorEl === document.getElementById("basic-button-ingestion")}
                onClose={handleClose}
                sx={{ width: 350 }}
                aria-labelledby="basic-button-ingestion"
              >
                
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <CurrencyExchange fontSize="small" />
                  </ListItemIcon>
                  <ListItemText sx={{ width: 100 }}><Link style={{ textDecoration: 'none'}} to="/Ingestion/Gatherer" >Gatherers</Link></ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    Ctrl+G
                  </Typography>
                </MenuItem>
    
                
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <LibraryBooks fontSize="small" />
                  </ListItemIcon>
                  <ListItemText sx={{ width: 100 }}><Link style={{ textDecoration: 'none'}} to="/Ingestion/Bulk" >Bulk</Link></ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    Ctrl+B
                  </Typography>
                </MenuItem>
                
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Api fontSize="small" />
                  </ListItemIcon>
                  <ListItemText sx={{ width: 100 }}>API's</ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    Ctrl+I
                  </Typography>
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <ErrorOutline fontSize="small" />
                  </ListItemIcon>
                  <ListItemText>Splunk</ListItemText>
                </MenuItem>
              </Menu>
              <Button
                key="Config"
                id="basic-button-config"
                aria-controls={open ? 'basic-menu-config' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, width: 100, color: "white", display: "block" }}
              >
                Config
              </Button>
              <Menu
                id="basic-menu-config"
                anchorEl={anchorEl}
                open={openmenu && anchorEl === document.getElementById("basic-button-config")}
                onClose={handleClose}
                aria-labelledby="basic-button-config"
                MenuListProps={{
                  'aria-labelledby': 'basic-button-config',
                }}
              >
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Code fontSize="small" />
                  </ListItemIcon>
                  <ListItemText sx={{ width: 100 }}><Link style={{ textDecoration: 'none'}} to="/config/cobrand">Cobrand</Link></ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    Ctrl+G
                  </Typography>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Code fontSize="small" />
                  </ListItemIcon>
                  <ListItemText sx={{ width: 100 }}><Link style={{ textDecoration: 'none'}} to="/config/source">Source</Link></ListItemText>
                  <Typography variant="body2" color="text.secondary">
                    Ctrl+G
                  </Typography>
                </MenuItem>
              </Menu>
              <Button
                key="Support"
                id="basic-button-support"
                aria-controls={open ? 'basic-menu-support' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{ my: 2, width: 100, color: "white", display: "block" }}
              >
                Support
              </Button>
              <Menu
                open={openmenu && anchorEl === document.getElementById("basic-button-support")}
                id="composition-menu"

                aria-labelledby="composition-button"
                onKeyDown={handleListKeyDown}
                anchorEl={anchorEl}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>

              {/* <Menu
                id="basic-menu-support"
                anchorEl={anchorEl}
                open={openmenu}
                onClose={handleClose}
                aria-labelledby="basic-button-support"
                MenuListProps={{
                  'aria-labelledby': 'basic-button-support',
                }}
              > */}
              {/*               
                <MenuItem onClick={handleClose}>SR's</MenuItem>
                <MenuItem onClick={handleClose}>Retention</MenuItem>
                <MenuItem onClick={handleClose}>Prioritization</MenuItem>
              </Menu> */}
            </Box>

            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <Routes>
            <Route path="/" element={<Placeholder />} />
            <Route path="/Ingestion/Gatherer" element={<GathererMenu />} />
            <Route path="/Ingestion/Bulk/*"  element={<BulkMenu />} />
            <Route path="/config/cobrand" element={<Placeholder />} />
            <Route path="/config/source" element={<Placeholder />} />
          </Routes>

        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar ></Toolbar>
          <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
            <Routes>
              <Route path="/" element={<Placeholder />} />
              <Route path="/Ingestion/Gatherer" element={<Dashboard />} />
              <Route path="/Ingestion/Bulk" element={<DashboardBulk />} />
              <Route path="/Ingestion/Bulk/Status" element={<DashboardBulkStatus />} />
            </Routes>

            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Portal() {
  return <PortalContent />;
}