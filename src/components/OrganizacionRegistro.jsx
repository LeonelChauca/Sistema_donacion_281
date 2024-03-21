import React from 'react'
import style from '../styles/components/OrganizacionCreate.module.css';
import 'animate.css';
import { Grid, TextField } from '@mui/material';
import Mapa from './Mapa';

const OrganizacionRegistro = ({register,setValue}) => {
  return (
    <>
      <h4>Datos de la empresa :</h4>
      <div className={' animate__animated animate__fadeInDown '+style.container}>
        <TextField {...register("Nombre_Org")} id="outlined-basic"  label="Nombre Org." variant="outlined" />
        <TextField {...register("tipo_od")} id="outlined-basic"  label="Tipo" variant="outlined" />
        <TextField {...register("direccion")} id="outlined-basic"  label="direccion" variant="outlined" />
        <TextField {...register("nit")} id="outlined-basic"  label="nit" variant="outlined" />
      </div>
      <h4>Selecciona la direccion principal de la empresa :</h4>
      <Mapa setValue={setValue}/>
    </>
    
  )
}

export default OrganizacionRegistro
