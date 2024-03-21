import React from 'react'
import style from '../styles/components/PersonaRegister.module.css';
import { Grid, TextField } from '@mui/material';
import  Mapa  from './Mapa';
import 'animate.css';
const PersonaDonanteRegister = ({register,setValue}) => {
  return (
    <div>
        <h4>Datos de donante </h4>
        <div className={' animate__animated animate__fadeInDown '+style.container} >
            <TextField {...register("direccion_dn")} id="outlined-basic" label="Direccion" variant="outlined" />
        </div>
        <Mapa setValue={setValue}/>
    </div>
  )
}

export default PersonaDonanteRegister
