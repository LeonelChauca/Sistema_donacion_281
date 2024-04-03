import React from 'react'
import style from '../styles/components/OrganizacionCreate.module.css';
import 'animate.css';
import { Grid, TextField } from '@mui/material';
import Mapa from './Mapa';
import expReg from '../components/expReg.js';

const OrganizacionRegistro = ({register,setValue}) => {
  return (
    <>
      <h4>Datos de la empresa :</h4>
      <div className={' animate__animated animate__fadeInDown '+style.container}>
        <TextField {...register("nombre_od")}  className={style.validar} label="Nombre Org." variant="outlined" 
        required
        inputProps={{
          pattern:expReg.texto.exp,
          title:expReg.texto.msg
        }}
        />
        <TextField {...register("tipo_od")}  className={style.validar}  label="Tipo" variant="outlined" 
        
        required
        inputProps={{
          pattern:expReg.texto.exp,
          title:expReg.texto.msg
        }}
        />
        <TextField {...register("direccion_od")}  className={style.validar}  label="direccion" variant="outlined"
        required
        inputProps={{
          pattern:expReg.direccion.exp,
          title:expReg.direccion.msg
        }}
        
        />
        <TextField {...register("nit_od")} className={style.validar}   label="nit" variant="outlined" 
        required
        inputProps={{
          pattern:expReg.number.exp,
          title:expReg.number.msg
        }}
        />

        <TextField {...register("puesto_trabajo_d")} className={style.validar}   label="puesto" variant="outlined" 
        required
        inputProps={{
          pattern:expReg.texto.exp,
          title:expReg.texto.msg
        }}
        />
      </div>
      <h4>Selecciona la direccion principal de la empresa :</h4>
      <Mapa setValue={setValue}/>
    </>
    
  )
}

export default OrganizacionRegistro
