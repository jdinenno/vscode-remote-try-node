import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';
import GathererLatencyChart from '../gatherers/GathererLatencyChart';
import CobrandComboBox from '../../CobrandCombo';
import SubbrandComboBox from '../../SubbrandCombo';
import SiteComboBox from '../../SiteCombo';
import GathererLatencyGrid from '../gatherers/GathererLatencyGrid';
import { DataGrid } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';


const mdTheme = createTheme();

export default function DashboardBulk() {
    const { data, loading } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 100,
        maxColumns: 10,
      });
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
                        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: 840 }}>
                            Bulk
                            <div style={{ height: '100%', width: '100%' }}>
                                <DataGrid
                                    {...data}
                                    loading={loading}
                                    initialState={{
                                    ...data.initialState,
                                    filter: {
                                        filterModel: {
                                        items: [{ columnField: 'quantity', operatorValue: '>', value: 10000 }],
                                        },
                                    },
                                    sorting: {
                                        sortModel: [{ field: 'desk', sort: 'asc' }],
                                    },
                                    }}
                                />
                                </div>
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
