import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import Chart from '../../Chart';
import CobrandComboBox from '../../CobrandCombo';
import SubbrandComboBox from '../../SubbrandCombo';
import SiteComboBox from '../../SiteCombo';
import GathererLatencyGrid from './GathererLatencyGrid';
import GathererLatencyChart from './GathererLatencyChart';

const mdTheme = createTheme();
// const handleClick = (event: React.MouseEvent<HTMLButtonElement>, ) => {
//     alert();
//   };
export default function Dashboard() {
    return (
        <React.Fragment>
            <ThemeProvider theme={mdTheme}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 1, display: 'flex', flexDirection: 'row' }}>
                            <CobrandComboBox />
                            <SubbrandComboBox />
                            <SiteComboBox />
                            <IconButton color="inherit">
                                <SearchIcon />
                            </IconButton>
                        </Paper>
                    </Grid>
                    {/* Gatherer Latency Chart */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 440 }}>
                            <Chart />
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 800 }}>
                            <GathererLatencyChart />
                        </Paper>
                    </Grid>
                    {/* Gatherer Latency Grid */}
                    <Grid item xs={12}>
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                            <GathererLatencyGrid />
                        </Paper>
                    </Grid>
                </Grid>
            </ThemeProvider>
        </React.Fragment>
    );
}
