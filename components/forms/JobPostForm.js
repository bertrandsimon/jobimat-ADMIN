import styles from '../../styles/JobPostForm.module.css';
import Link from 'next/link';

import * as React from 'react';

// STATES IMPORT
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

// MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

// STYLES IMPORT


function JobPostForm() {
 
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [reference, setReference] = useState('');
  const [description, setDescription] = useState('');
  const [contract, setContract] = useState('');
  const [store, setStore] = useState('');
  const [jobType, setJobType] = useState('');
  const [jobImage, setJobImage] = useState(''); 

  
  const handleSubmit = () => {
    fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title }),
    }).then(response => response.json())
      .then(data => 
       console.log(data)
      );
  };


  return (
  <div className={styles.container}>

    <div>
      <h3 className={styles.title}>Je crée une annonce</h3>
    </div>

    <div className={
styles.email
}>
      <TextField
          id="outlined-multiline-static"
          label="Titre"
          multiline
          sx={{ m: 1, width: '500px' }}
          rows={1}
          onChange={(e) => setTitle(e.target.value)}
        />
    </div>

    <div className={
styles.email
}>
      <TextField
          id="outlined-multiline-static"
          label="Date"
          multiline
          sx={{ m: 1, width: '500px' }}
          rows={1}
          value={new Date().toLocaleDateString()}
          readOnly
          onChange={(e) => setDate(e.target.value)}
        />
    </div>

    <div className={
styles.email
}>
      <TextField
          id="outlined-multiline-static"
          label="Reference"
          multiline
          sx={{ m: 1, width: '500px' }}
          rows={1}
          onChange={(e) => setReference(e.target.value)}
        />
    </div>

    <div className={
styles.email
}>
      <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          sx={{ m: 1, width: '500px' }}
          rows={10}
          onChange={(e) => setDescription(e.target.value)}
        />
    </div>

    <div className={
styles.email
}>
      <TextField
          id="outlined-multiline-static"
          label="Contrat"
          multiline
          sx={{ m: 1, width: '500px' }}
          rows={1}
          onChange={(e) => setContract(e.target.value)}
        />
    </div>

    <div className={
styles.email
}>
      <TextField
          id="outlined-multiline-static"
          label="Magasin"
          multiline
          sx={{ m: 1, width: '500px' }}
          rows={1}
          onChange={(e) => setStore(e.target.value)}
        />
    </div>

    <div className={
styles.email
}>
      <TextField
          id="outlined-multiline-static"
          label="Type d'emploi"
          multiline
          sx={{ m: 1, width: '500px' }}
          rows={1}
          onChange={(e) => setJobType(e.target.value)}
        />
    </div>


    <div className={
styles.email
} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
      <input
        accept="image/*"
        id="contained-button-file"
        multiple
        type="file"
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            const reader = new FileReader();
            reader.onload = () => {
              setJobImage(reader.result);
            };
            reader.readAsDataURL(file);
          }
        }}
        style={{ display: 'none' }}
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span">
          Charger une image
        </Button>
      </label>
    </div>


    <div className={styles.register}>
      <Button sx={{ height: '99%', width: '500px' }} variant="contained" onClick={() => handleSubmit()} >Création de l'annonce</Button>
    </div>

  </div>
   
  );
}


export default JobPostForm; 