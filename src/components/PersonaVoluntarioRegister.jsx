import React from 'react'
import style from '../styles/components/PersonaRegister.module.css';
import { Grid, TextField } from '@mui/material';
import  Mapa  from './Mapa';
import 'animate.css';
const PersonaVoluntarioRegister = ({register}) => {
  return (
    <div>
        <h4>Datos del Voluntario</h4>
        <div className={' animate__animated animate__fadeInDown '+style.container} >
            <TextField className={style.validar}  {...register("horario")}id="outlined-basic" label="Horario" variant="outlined" 
            required
            />
            <TextField className={style.validar} {...register("turno")}id="outlined-basic" label="turno" variant="outlined" 
            required
            />
        </div>
    </div>
  )
}

export default PersonaVoluntarioRegister
