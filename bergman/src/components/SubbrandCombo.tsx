import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function SubbrandComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="subbrandcombo"
      options={subbrandlist}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Subbrand" />}
    />
    
  );
}


const subbrandlist = [
  { label: 'Subbrand 1' },
  { label: 'Subbrand 2'},
  { label: 'Subbrand 3'},
  { label: 'Subbrand 4'},
  { label: 'Subbrand 6'},
  { label: 'Subbrand 7'},
  { label: 'Subbrand 8'},
];
