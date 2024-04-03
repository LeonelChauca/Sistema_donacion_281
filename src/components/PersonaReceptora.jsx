import React from 'react'
import {useState} from 'react'
import style from '../styles/components/PersonaRegister.module.css';
import { Grid, TextField } from '@mui/material';
import  Mapa  from './Mapa';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput'
import expReg from '../components/expReg.js';

import 'animate.css';
export const PersonaReceptora = ({register,setValue}) => {
  return (
    <div>
        <h4>Datos del Receptor</h4>
        <div className={' animate__animated animate__fadeInDown '+style.container} >
            <TextField {...register("descripcion_rn")} className={style.validar}  label="Descripcion" required
            variant="outlined" /> 
            <TextField {...register("direccion_rn")} className={style.validar}  label="Dirección" required
              inputProps={{
                pattern:expReg.direccion.exp,
                title:expReg.direccion.msg
              }}
            variant="outlined" /> 
            
        </div>
        <Mapa setValue={setValue}/>
    </div>
  )
}
