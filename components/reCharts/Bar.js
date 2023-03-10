import styles from '../../styles/Bar.module.css';
import Link from 'next/link';

import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';

import {PieChart, Pie, Sector, Cell, Tooltip} from 'recharts';

const data01 = [
  { name: 'Manutention', value: 400 },
  { name: 'Technique', value: 100 },
  { name: 'Vendeur', value: 300 },
  { name: 'Marketing', value: 200 },
];
const data02 = [
  { name: 'Vendeur magasin', value: 100 },
  { name: 'Vendeur Online', value: 300 },
  { name: 'Conseiller avant vente', value: 100 },
  { name: 'Caissier', value: 80 },
  { name: 'Technico commercial', value: 40 },
  { name: 'Itinerant', value: 30 },
  { name: 'Support client', value: 50 },

];



function Bar() {

  const theme = useTheme();
 

  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
     <h4 style={{ fontSize: '16px', color: 'grey', textTransform: 'uppercase' }}>Type d'offres par poste</h4>
     
     
     <PieChart width={800} height={400}>
          <Pie data={data01} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
          <Pie data={data02} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
      <Tooltip/>
      </PieChart>
     
    </div>

  );
}

export default Bar;