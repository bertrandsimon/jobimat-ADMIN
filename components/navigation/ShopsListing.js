import styles from '../../styles/ShopsListing.module.css';
import Link from 'next/link';
import Image from 'next/image';


import { styled, useTheme } from '@mui/material/styles';
import { useState } from 'react';
import ShopsTable from '../tables/ShopsTable';
import CircleNivoChart from '../nivoCharts/CircleNivoChart';
import { MuiDrawer, MuiAppBar, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ChevronLeftIcon, ChevronRightIcon, ListItem, ListItemButton, ListItemIcon, ListItemText, InboxIcon, MailIcon, DashboardIcon, PersonSearchIcon, CreateIcon, QueryStatsIcon, MenuIcon, StoreIcon, Box, Paper, Grid } from './muiComponentsImport';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const CustomDrawerHeader = styled(DrawerHeader)(({ theme }) => ({
  backgroundColor: 'linear-gradient(90deg, #A10410 6.25%, #C60501 100%)',
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: 'linear-gradient(90deg, #A10410 6.25%, #C60501 100%)', 
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    background: 'linear-gradient(90deg, #A10410 6.25%, #C60501 100%)',
    boxShadow: 'none',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

function ShopsListing() {

  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

   <Box sx={{ display: 'flex', backgroundColor: '#E7EBF0', height:'100vh' }}>
      <CssBaseline />

      <AppBar position="fixed" open={open} elevation={0}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Jobimat
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <DrawerHeader style={{ background: 'linear-gradient(90deg, #A10410 6.25%, #C60501 100%)' }}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        
      
        <List>
          <Link href="/dashboard">
            <ListItem key="Dashboard" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <List>
          <Link href="/jobs">
            <ListItem key="Annonces" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <ListItemText primary="Annonces" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <List>
          <Link href="/applicants">
            <ListItem key="Candidats" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PersonSearchIcon />
                </ListItemIcon>
                <ListItemText primary="Candidats" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <List>
          <Link href="/statistics">
              <ListItem key="Statistiques" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <QueryStatsIcon />
                  </ListItemIcon>
                  <ListItemText primary="Statistiques" />
                </ListItemButton>
              </ListItem>
            </Link>
        </List>

        <List>
          <Link href="/shops">
            <ListItem key="Magasins" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <StoreIcon />
                </ListItemIcon>
                <ListItemText primary="Magasins" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        <List>
          <Link href="/messages">
            <ListItem key="Messages" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="Messages" />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

      </Drawer>

      
      <Box sx={{ flexGrow: 1, margin:'60px', marginTop:'160px', backgroundColor: '#E7EBF0' }}>

        <Grid container spacing={4}>

        <Grid xs={3}>
            <Paper elevation={3} sx={{ padding: 3, minHeight: '200px' }}>
                  <CircleNivoChart/>
            </Paper>
          </Grid>

          <Grid xs={3}>
            <Paper elevation={3} sx={{ padding: 3, minHeight: '200px' }}>
                <div><Image src="/images/chart.jpg" width={500} height={400} /></div>
            </Paper>
          </Grid>

          <Grid xs={3}>
            <Paper elevation={3} sx={{ padding: 3, minHeight: '200px' }}>
              <div><Image src="/images/chart.jpg" width={500} height={400} /></div>
            </Paper>
          </Grid>

          <Grid xs={3}>
            <Paper elevation={3} sx={{ padding: 3, minHeight: '200px' }}>
              <div><Image src="/images/chart.jpg" width={500} height={400} /></div>
            </Paper>
          </Grid>

          <Grid xs={12}>

            <Paper elevation={3} sx={{ padding: 3, minHeight: '500px' }}>

                <ShopsTable/>

            </Paper>

          </Grid>

        
          

       

          
        

        </Grid>

      </Box>


    </Box>

  );
}

export default ShopsListing;