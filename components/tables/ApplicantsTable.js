import styles from '../../styles/ApplicantsTable.module.css';
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




function ApplicantsTable() {

  const [applicantsData, setApplicantsData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/admin/applicants')
      .then(response => response.json())
      .then(data => {
        console.log(data.allApplicants)
        setApplicantsData(data.allApplicants)
      });
  }, []);

  const applicantRow = applicantsData.map((data, i) => {
    return <TableRow
            key={i}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }  }}
          >
            <TableCell align="center" sx={{ width: 100, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Avatar alt="Remy Sharp" src="/images/1.jpg" /></TableCell>
            <TableCell align="left" sx={{ width: 200 }}>{data.surname.charAt(0).toUpperCase() + data.surname.slice(1)} </TableCell>
            <TableCell align="left" sx={{ width: 200 }}>{data.surname} </TableCell>
            <TableCell align="left" sx={{ width: 200 }}>{data.surname} </TableCell>
            <TableCell align="left" sx={{ width: 'max-content' }}>{data.surname} </TableCell>
          </TableRow>
  });

  // const applicantRow = applicantsData.map((data, i) => {
  //   return <JobCard key={i} {...data} />
  // });

  return (

    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 350 }} aria-label="simple table">
      <TableHead className={styles.tableHead}>
        <TableRow>
        
          <TableCell align="center" sx={{ width: 100}}>Avatar</TableCell>
          <TableCell align="left" sx={{ width: 200 }}>Nom</TableCell>
          <TableCell align="left" sx={{ width: 200 }}>Prénom</TableCell>
          <TableCell align="left" sx={{ width: 200 }}>Evaluation</TableCell>
          <TableCell align="left" sx={{ width: 'max-content' }}>Data 4</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {applicantRow}
      </TableBody>
    </Table>
  </TableContainer>

  );
}

export default ApplicantsTable;