import React, { useEffect } from 'react'
import style from '../styles/components/CreatePersona.module.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { PersonaRegister } from './PersonaRegister';
import axios from 'axios';
import 'animate.css';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import OrganizacionRegistro from './OrganizacionRegistro';
import Button from '@mui/material/Button';
import { useStore } from '../controllers/Auth.js';

export const CreateEmpresa = () => {

  const setLogged = useStore((state)=>state.setLogged) 
  

  const [selectP, setselectP] = useState('');
    const handleChange = (event) => {
        setselectP(event.target.value);
    };
    const { register, handleSubmit,formState: { errors },setValue } = useForm()
    const onSubmit = (data) => {
   
        axios.post('https://proyecto-281-production.up.railway.app/api/auth/new',data)
        .then(response => {
          
 //         console.log(response.data.ok);
   //       setLogged(response.data.ok); 
          
        })
        .catch(error => {
            console.log(error);
        })
      }
  return (
    <>
      <div  className={"animate__animated animate__backInLeft "+style.containerMain}>
        <h1>Tipo de organizacion :</h1>
        <form className={style.containerF} onSubmit={handleSubmit(onSubmit)}>
            <FormControl className={style.containerSelect}>
                <Select
                    displayEmpty
                    value={selectP}
                    {...register("tipo")}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value={"orgDonante"}>Org. Donante</MenuItem>
                    <MenuItem value={"orgReceptor"}>Org. Receptor</MenuItem>
                    <MenuItem value={"otro"}>Otro</MenuItem>
                </Select>
                <FormHelperText>Elije uno*</FormHelperText>
            </FormControl>
            <Box className={style.boxC}>
                    
                    {selectP=="orgDonante" ? <div> <hr /> <h4>Primeramente registra la persona que se encargara de la empresa :</h4>  <PersonaRegister  register={register}/> <OrganizacionRegistro register={register} setValue={setValue}/> </div>:''}
                    {selectP=="orgReceptor" ? <div> <hr /> <h4>Primeramente registra la persona que se encargara de la empresa :</h4>  <PersonaRegister  register={register}/> <OrganizacionRegistro register={register} setValue={setValue}/></div> :''}
            </Box>
            <Button className={style.btnGuardar} variant="contained" type="submit" disabled={selectP==""}>Guardar</Button>
        </form>
        
    </div>
    </>
  )
}
