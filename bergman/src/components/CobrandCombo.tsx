import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function CobrandComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="cobrandcombo"
      options={cobrandlist}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Cobrand" />}
    />
    
  );
}


const cobrandlist = [
  { label: 'PNC' },
  { label: 'Backbase'},
  { label: 'Synchrony'},
  { label: 'Paypal'},
  { label: 'YahooFinance'},
  { label: 'Schwab'},
  { label: 'Moneyguide'},
];
