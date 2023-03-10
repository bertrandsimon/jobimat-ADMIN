import styles from '../../styles/Pie.module.css';
import Link from 'next/link';

import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';

import {LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from 'recharts';

const data = [
  {name: "Avril", globales:32, votre_magasin: 60},
  {name: "Mai", globales:42, votre_magasin: 54},
  {name: "Juin", globales:51, votre_magasin: 55},
  {name: "Juillet", globales:60, votre_magasin: 28},
  {name: "Aout", globales:98, votre_magasin: 27},

]




function Pie() {

  const theme = useTheme();
 

  return (

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
    <h4 style={{ fontSize: '16px', color: 'grey', textTransform: 'uppercase' }}>Comparaison Annonces globales vs votre magasin</h4>
        <LineChart width={800} height={400} data={data} style={{ marginLeft: '-30px' }}>
          <Line type="monotone" dataKey="globales" stroke="#2196F3" strokeWidth={3}></Line>
          <Line type="monotone" dataKey="votre_magasin" stroke="#FFCA29" strokeWidth={3}></Line>
          
          <XAxis dataKey="name"/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
        </LineChart>
      
    </div>

  );
}

export default Pie;