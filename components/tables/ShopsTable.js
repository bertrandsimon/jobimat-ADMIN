import styles from '../../styles/ShopsTable.module.css';
import Link from 'next/link';
import { useEffect } from 'react';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Gedimat Laval', 159, 6.0, 24, 4.0),
  createData('Gedibois Laval', 237, 9.0, 37, 4.3),
  createData('Concept Store Laval', 262, 16.0, 24, 6.0),
  createData('Gedimat Laval', 305, 3.7, 67, 4.3),
  createData('Gedimat Laval', 356, 16.0, 49, 3.9),
];


function ShopsTable() {


  return (

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead className={styles.tableHead}>
        <TableRow>
          <TableCell>Nom du magasin</TableCell>
          <TableCell align="right">Data 1</TableCell>
          <TableCell align="right">Data 2</TableCell>
          <TableCell align="right">Data 3</TableCell>
          <TableCell align="right">Data 4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

  );
}

export default ShopsTable;