import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SiteComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="sitecombo"
      options={sitelist}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Site" />}
    />
    
  );
}


const sitelist = [
  { label: 'PNC' },
  { label: 'Bank of America'},
  { label: 'Wells Fargo'},
  { label: 'TD Bank'},
  { label: 'Citibank'},
  { label: 'J.P. Morgan Chase'},
  { label: 'M&T Bank'},
];
