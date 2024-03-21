import React from 'react'
import style from '../styles/components/PersonaRegister.module.css';
import { Grid, TextField } from '@mui/material';
import 'animate.css';
export const PersonaRegister = ({register}) => {
  return (


    <>
        <div className={' animate__animated animate__fadeInDown '+style.container} >
            <TextField {...register("ci")} id="outlined-basic" label="Ci" variant="outlined" />
            <TextField {...register("nombre")} id="outlined-basic" label="Nombres" variant="outlined" />
            <TextField {...register("ap_paterno")} id="outlined-basic" label="Apellido Paterno" variant="outlined"  />
            <TextField {...register("ap_materno")} id="outlined-basic" label="Apellido Materno" variant="outlined"  />
            <TextField {...register("fecha_nac")} id="outlined-basic" label="Fecha de Nacimiento" variant="outlined"  />
            <TextField {...register("nro_cel")} id="outlined-basic" label="Numero de celular" variant="outlined"  />
            <TextField {...register("correo")} id="outlined-basic" label="Correo" variant="outlined"  />
        </div>
        <hr />
        <h4>Datos de Usuario</h4>
        <div className={' animate__animated animate__fadeInDown '+style.container}>
            <TextField {...register("user")} id="outlined-basic" label="Usuario" variant="outlined"  />
            <TextField {...register("password")} id="outlined-basic" label="Contraseña" variant="outlined"  />
        </div>
    </>
  )
}