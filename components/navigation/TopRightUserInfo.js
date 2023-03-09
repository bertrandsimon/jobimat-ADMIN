import styles from '../../styles/TopRightUserInfo.module.css';
import Link from 'next/link';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import LogoutIcon from '@mui/icons-material/Logout';
import EmailIcon from '@mui/icons-material/Email';
import IconButton from '@mui/material/IconButton';
import SettingsIcon from '@mui/icons-material/Settings';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';
import Button from '@mui/material/Button';

import { loggedStatus, loggedName, loggedToken } from '../../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import JobPostForm from '../forms/JobPostForm';

function TopRightUserInfo() {
  const dispatch = useDispatch();
  const userConnected = useSelector((state) => state.user.userConnected);

  if (!userConnected) {
    window.location.href = 'http://localhost:3001/login'
    return null
  }
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(loggedStatus())
    dispatch(loggedName(''))
    dispatch(loggedToken(''))
  }

  return (

    <div className={styles.userInfoWrapper}>

      <Avatar alt="Remy Sharp" src="/images/1.jpg" />
      <span>Anthony Doumer (Gedimat Paris)</span>

      <Button variant="contained" onClick={handleClickOpen}>Poster une annonce</Button>

      <Tooltip title="Messages">
        <Badge badgeContent={4} color="primary" >
            <EmailIcon/>
        </Badge>
      </Tooltip>

      <Tooltip title="Paramètres">
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
      </Tooltip>

      <Tooltip title="Se déconnecter">
        <IconButton color="inherit" onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Tooltip>



      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogContent>

          
          <JobPostForm/>
        
         

        </DialogContent>
  
      </Dialog>
            
    </div>

  );
}

export default TopRightUserInfo;