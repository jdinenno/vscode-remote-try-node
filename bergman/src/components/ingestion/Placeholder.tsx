import * as React from 'react';
import { useTheme } from '@mui/material/styles';


import Title from '../Title';

export default function Placeholder() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Placeholder</Title>
    </React.Fragment>
  );
}