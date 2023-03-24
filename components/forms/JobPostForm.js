import styles from '../../styles/JobPostForm.module.css';
import Link from 'next/link';

import * as React from 'react';

// STATES IMPORT
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// MUI IMPORTS
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel'; 

// STYLES IMPORT


function JobPostForm() {
 
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [reference, setReference] = useState('');
  const [description, setDescription] = useState('');
  const [contract, setContract] = useState([]);
  const [store, setStore] = useState([]);
  const [jobType, setJobType] = useState([]);
  const [jobImage, setJobImage] = useState(''); 

  const [value, setValue] = useState([0]);
  const [inputValue, setInputValue] = useState('');

  const obj= [{id: "63fc9578c0f8f6ccc70feaea", type: "cdi" }, {id: "63fc96bdc0f8f6ccc70feaeb", type: "cdd"}, {id: "63ff4c8f67f60b5da619387b", type:"stage"}, {id: "6401c3676564a9fab0847429", type: "stage"}, {id: "6401c3766564a9fab084742a", type: "apprentissage"}, {id: "6401c38c6564a9fab084742b", type: "interim"}];

  const newArray= []
  obj.forEach((el) => {
    newArray.push({label: el.type, id: 
el.id
});
    })
console.log(newArray);
  
  const handleSubmit = () => {
    fetch('https://jobimat-backend-final.vercel.app/jobs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description, date, reference, contract: contract }),
    }).then(response => response.json())
      .then(data => 
       console.log(data)
      );
  };
console.log(value)
  useEffect(() => {
    fetch ('https://jobimat-backend-final.vercel.app/admin/contracts')
    .then (response => response.json())
    .then(data =>
      setContract(data.contracts.filter(x => x.type))
      
      );
  }, [])
console.log(contract)

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
   <FormControl fullWidth>
                    <InputLabel>Anglais</InputLabel>
                    <Select
                      value={contract}
                      label="Contrat"
                      onChange={(e) => setContract(e.target.value)}
                    >
                      <MenuItem value={'63fc9578c0f8f6ccc70feaea'}>CDI</MenuItem> 
                      <MenuItem value={50}>Moyen</MenuItem>
                      <MenuItem value={100}>Bilingue</MenuItem>
                    </Select>
                </FormControl> 
     
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