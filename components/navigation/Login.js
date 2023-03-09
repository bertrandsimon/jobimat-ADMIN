//import styles from '../../styles/Login.module.css';
import styles from '../../styles/JobListing.module.css';
import Link from 'next/link';

import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';

import { MuiDrawer, MuiAppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ChevronLeftIcon, ChevronRightIcon, ListItem, ListItemButton, ListItemIcon, ListItemText, InboxIcon, MailIcon, DashboardIcon, PersonSearchIcon, CreateIcon, QueryStatsIcon, MenuIcon, StoreIcon, Box, Paper, Grid } from './muiComponentsImport';
import Signin from '../authentication/Signin';

function Login() {

  return (

    <Box sx={{ display: 'flex', backgroundColor: '#E7EBF0', height:'100vh' }}>
    <CssBaseline />
    
    <Box sx={{ flexGrow: 1, backgroundColor: '#E7EBF0',   display: 'flex', alignItems: 'center', justifyContent: 'center', }}>

      <Paper elevation={3} sx={{ padding: 0, minHeight: '200px', width: '400px' }}>

            <Signin/>

        </Paper>

    </Box>


  </Box>


  );
}

export default Login;