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

export const CreateEmpresa = () => {
  const [selectP, setselectP] = useState('');
    const handleChange = (event) => {
        setselectP(event.target.value);
    };
    const { register, handleSubmit,formState: { errors },setValue } = useForm()
    const onSubmit = (data) => {
        console.log(data);
        axios.post('http://localhost:3001/empresa',data)
        .then(response => {
            console.log(response);
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
            <button type='submit'>Enviar</button>
        </form>
        
    </div>
    </>
  )
}
