import React from 'react'
import style from '../styles/components/PersonaRegister.module.css';
import { Grid, TextField } from '@mui/material';
import expReg from '../components/expReg.js';

import 'animate.css';
export const PersonaRegister = ({register}) => {
  const currentDate = new Date().toISOString().slice(0, 10);

  return (


    <>
    <div className={style.estado}>
      <span  className={style.valido}>Validado</span>
      <span  className={style.invalido}>Requerido</span>
    </div>
        <div className={' animate__animated animate__fadeInDown '+style.container} >           
            <TextField {...register("ci")}   className={style.validar}    label="Ci" variant="outlined"  type="text"  required    
            inputProps={{
              pattern: expReg.number.exp,
              title:expReg.number.msg 
            }}
            
            />
            <TextField {...register("nombre")}    className={style.validar}    label="Nombres" variant="outlined" required type="text"
            inputProps={{
              pattern: expReg.texto.exp, 
              title:expReg.texto.msg
            }}
            />
            <TextField {...register("ap_paterno")}   className={style.validar}    label="Apellido Paterno" variant="outlined"  required type="text" 
            inputProps={{
              pattern: expReg.texto.exp, 
              title:expReg.texto.msg
            }}
            />
            <TextField {...register("ap_materno")}   className={style.validar}    label="Apellido Materno" variant="outlined"  type="text"
            inputProps={{
              pattern: expReg.texto.exp,
              title:expReg.texto.msg
            }}
            />
            <TextField {...register("fecha_nac")}   className={style.validar}    label="" variant="outlined" required  type="date" 
            defaultValue={currentDate}
            
            />
            <TextField {...register("nro_cel")}   className={style.validar}    label="Numero de celular" variant="outlined" required  type="text"             
            inputProps={{
              pattern: expReg.tel.exp, 
              title:expReg.tel.msg

            }}
            />
            <TextField {...register("correo")}   className={style.validar}   id="outlined-basic" label="Correo" variant="outlined"  required  type="email"
            inputProps={{
              pattern:expReg.correo.exp,
              title:expReg.correo.msg
            }}
            />
        </div>
        <hr />
        <h4>Datos de Usuario</h4>
        <div className={' animate__animated animate__fadeInDown '+style.container}>
            <TextField {...register("user")}  className={style.validar}  label="Usuario" variant="outlined" 
            inputProps={{
              pattern:expReg.user.exp,
              title:expReg.user.msg
            }}
            required
            />
            <TextField {...register("password")}  className={style.validar}  label="Contraseña" variant="outlined" 
             
            inputProps={{
              pattern:expReg.pass.exp,
              title:expReg.pass.msg
            }}
            required
            />
        </div>
    </>
  )
}