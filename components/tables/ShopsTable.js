import styles from '../../styles/ShopsTable.module.css';
import Link from 'next/link';
import { useEffect } from 'react';
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





function ShopsTable() {


  const [shopsData, setShopsData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/admin/stores')
      .then(response => response.json())
      .then(data => {
        
        setShopsData(data.allStores)
      });
  }, []);

  const jobRow = shopsData.map((data, i) => {
    return <TableRow
            key={i}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }  }}
          >
            
            <TableCell align="left" sx={{ width: 100 }}>{data.storeName} </TableCell>
            <TableCell align="left" sx={{ width: 100 }}>{data.adherent} </TableCell>
            <TableCell align="center" sx={{ width: 100 }}>{data.address} </TableCell>
            <TableCell align="center" sx={{ width: 100 }}> {data.postalCode}  </TableCell>
            <TableCell align="center" sx={{ width: 100 }}> {data.phoneConact}  </TableCell>
            <TableCell align="center" sx={{ width: 500 }}>actions </TableCell>

          </TableRow>
  });

  return (

    
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 350 }} aria-label="simple table">
      <TableHead className={styles.tableHead}>
        <TableRow>
        
          
          <TableCell align="left" sx={{ width: 100 }}>Magasin</TableCell>
          <TableCell align="left" sx={{ width: 100 }}>Adhérent</TableCell>
          <TableCell align="center" sx={{ width: 100 }}>Adresse</TableCell>
          <TableCell align="center" sx={{ width: 100 }}>Code Postal</TableCell>
          <TableCell align="center" sx={{ width: 100 }}>Téléphone</TableCell>
          <TableCell align="center" sx={{ width: 500 }}>Actions</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {jobRow}
      </TableBody>
    </Table>
  </TableContainer>

  );
}

export default ShopsTable;