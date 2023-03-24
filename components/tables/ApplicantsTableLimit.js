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
import Typography from '@mui/material/Typography';
import Actions from '../navigation/Actions';

import { orderBy } from 'lodash';

function ApplicantsTableLimit() {

  const [applicantsData, setApplicantsData] = useState([])
  const [sortBy, setSortBy] = useState('offersApplied')
  const [sortOrder, setSortOrder] = useState('desc')

  useEffect(() => {
    fetch('https://jobimat-backend-final.vercel.app/admin/applicants')
      .then(response => response.json())
      .then(data => {
        
        setApplicantsData(data.allApplicants.slice(0, 5))
      });
  }, []);

  const handleSort = (property) => {
    if (sortBy === property) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(property)
      setSortOrder('desc')
    }
  }

  const sortedApplicants = orderBy(applicantsData, [sortBy], [sortOrder])

  const applicantRow = sortedApplicants.map((data, i) => {
    return <TableRow
            key={i}
            sx={{ '&:last-child td, &:last-child th': { border: 0 }  }}
          >
            <TableCell align="center" sx={{ width: 50, fontWeight: 'bold' }}><Avatar alt="Remy Sharp" src="/images/1.jpg" /></TableCell>
            <TableCell align="left" sx={{ width: 100 }}>{data.name.charAt(0).toUpperCase() + data.name.slice(1)} </TableCell>
            <TableCell align="left" sx={{ width: 100 }}>{data.surname} </TableCell>
            <TableCell align="center" sx={{ width: 100 }}><div className={styles.eval}><Image src="/images/eval.png" width={68} height={37} /></div></TableCell>
            <TableCell align="center" sx={{ width: 100 }}> {data.offersApplied} </TableCell>
            <TableCell align="center" sx={{ width: 500 }}><Actions/> </TableCell>
          </TableRow>
  });


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead className={styles.tableHead}>
          <TableRow>
            <TableCell align="center" sx={{ width: 50}}>Avatar</TableCell>
            <TableCell align="left" sx={{ width: 100 }} onClick={() => handleSort('asc')}>Nom</TableCell>
            <TableCell align="left" sx={{ width: 100 }} onClick={() => handleSort('surname')}>Prénom</TableCell>
            <TableCell align="center" sx={{ width: 100 }}>Evaluation</TableCell>
            <TableCell align="center" sx={{ width: 100 }} onClick={() => handleSort('offersApplied')}>Nb offres postulés</TableCell>
            <TableCell align="center" sx={{ width: 500 }}>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applicantRow}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default ApplicantsTableLimit;