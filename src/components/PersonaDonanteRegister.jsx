import {useState} from 'react'
import style from '../styles/components/PersonaRegister.module.css';
import { Grid, TextField } from '@mui/material';
import  Mapa  from './Mapa';
import expReg from '../components/expReg.js';

import 'animate.css';
const PersonaDonanteRegister = ({register,setValue}) => {

  return (
    <div>
        <h4>Datos de donante </h4>
        <div className={' animate__animated animate__fadeInDown '+style.container} >
            <TextField {...register("direccion_dn")} className={style.validar}  label="Dirección" required
              inputProps={{
                pattern:expReg.direccion.exp,
                title:expReg.direccion.msg
              }}
            variant="outlined" />            
        </div>
        <Mapa setValue={setValue} register={register}/>
    </div>
  )
}

export default PersonaDonanteRegister
