import React from 'react'
import style from '../styles/components/PersonaRegister.module.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from "react-hook-form";
import { Grid, TextField } from '@mui/material';
import 'animate.css';   

export const PersonaRegister = ({register}) => {
  return (
    <>
        <div className={' animate__animated animate__fadeInDown '+style.container} >
            <TextField {...register("ci")} id="outlined-basic" label="Ci" variant="outlined" />
            <TextField {...register("nombre")} id="outlined-basic" label="Nombres" variant="outlined" />
            <TextField {...register("apPaterno")} id="outlined-basic" label="Apellido Paterno" variant="outlined"  />
            <TextField {...register("apMaterno")} id="outlined-basic" label="Apellido Materno" variant="outlined"  />
            <TextField {...register("Fecha_nac")} id="outlined-basic" label="Fecha de Nacimiento" variant="outlined"  />
            <TextField {...register("NumCelular")} id="outlined-basic" label="Numero de celular" variant="outlined"  />
            <TextField {...register("Correo")} id="outlined-basic" label="Correo" variant="outlined"  />
        </div>

    </>
  )
}