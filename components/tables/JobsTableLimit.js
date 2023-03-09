import styles from '../../styles/JobsTable.module.css';
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

import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import Typography from '@mui/material/Typography';


function JobsTableLimit() {

  const [jobsData, setJobsData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/jobs/')
      .then(response => response.json())
      .then(data => {
        
        setJobsData(data.allOffers.slice(0, 5))
      });
  }, []);

  const jobRow = jobsData.map((data, i) => {
    return <TableRow
            key={i}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }  }}
          >
            
            <TableCell align="left" sx={{ width: 100 }}>{data.title} </TableCell>
            <TableCell align="left" sx={{ width: 100 }}>{data.store.storeName} </TableCell>
            <TableCell align="center" sx={{ width: 100 }}>{data.store.postalCode} </TableCell>
            <TableCell align="center" sx={{ width: 100 }}> {data.contract.type}  </TableCell>
            <TableCell align="center" sx={{ width: 500 }}>actions </TableCell>

          </TableRow>
  });


  return (

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 350 }} aria-label="simple table">
      <TableHead className={styles.tableHead}>
        <TableRow>
        
          
          <TableCell align="left" sx={{ width: 100 }}>Titre</TableCell>
          <TableCell align="left" sx={{ width: 100 }}>Magasin</TableCell>
          <TableCell align="center" sx={{ width: 100 }}>Code Postal</TableCell>
          <TableCell align="center" sx={{ width: 100 }}>Contrat</TableCell>
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

export default JobsTableLimit;