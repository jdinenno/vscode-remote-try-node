
import { GridCellParams } from '@mui/x-data-grid-pro';
import { Link } from 'react-router-dom';



export function renderStatus(params: GridCellParams, link: string) {
  return <Link to={link} />;
}