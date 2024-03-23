import React from 'react'
import style from '../styles/components/PersonaRegister.module.css';
import { Grid, TextField } from '@mui/material';
import 'animate.css';
export const PersonaRegister = ({register}) => {
  const currentDate = new Date().toISOString().slice(0, 10);

  const texto={exp:"^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]{2,}$", msg:"Solo letras #caracteres >= 2"} 
  const user={exp:"[a-zA-Z][a-zA-Z0-9_]{3,}", msg:"Usuario Invalido #caracteres>3 que comience con caracteres"}
  const pass={exp:"[a-zA-Z0-9_]{5,}", msg:"Password Invalido #>= 5"}
  const number={exp:"^[0-9]{5,10}$", msg:"Solo números #>=5 y =<10"}
  const tel ={exp:"^(7|6)[0-9]{7}$", msg:"Numero de teléfono invalido  de 7 dígitos "}
  const correo={exp:"[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}", msg:"Email invalido"}

  return (


    <>
    <div className={style.estado}>
      <span  className={style.valido}>Validado</span>
      <span  className={style.invalido}>Requerido</span>
    </div>
        <div className={' animate__animated animate__fadeInDown '+style.container} >           
            <TextField {...register("ci")}   className={style.validar}   id="outlined-basic" label="Ci" variant="outlined"  type="text"  required    
            inputProps={{
              pattern: number.exp,
              title:number.msg 
            }}
            
            />
            <TextField {...register("nombre")}    className={style.validar}   id="outlined-basic" label="Nombres" variant="outlined" required type="text"
            inputProps={{
              pattern: texto.exp, 
              title:texto.msg
            }}
            />
            <TextField {...register("ap_paterno")}   className={style.validar}   id="outlined-basic" label="Apellido Paterno" variant="outlined"  required type="text" 
            inputProps={{
              pattern: texto.exp, 
              title:texto.msg
            }}
            />
            <TextField {...register("ap_materno")}   className={style.validar}   id="outlined-basic" label="Apellido Materno" variant="outlined"  type="text"
            inputProps={{
              pattern: texto.exp,
              title:texto.msg
            }}
            />
            <TextField {...register("fecha_nac")}   className={style.validar}   id="outlined-basic" label="" variant="outlined" required  type="date" 
            defaultValue={currentDate}
            
            />
            <TextField {...register("nro_cel")}   className={style.validar}   id="outlined-basic" label="Numero de celular" variant="outlined" required  type="text"             
            inputProps={{
              pattern: tel.exp, 
              title:tel.msg

            }}
            />
            <TextField {...register("correo")}   className={style.validar}   id="outlined-basic" label="Correo" variant="outlined"  required  type="email"
            inputProps={{
              pattern:correo.exp,
              title:correo.msg
            }}
            />
        </div>
        <hr />
        <h4>Datos de Usuario</h4>
        <div className={' animate__animated animate__fadeInDown '+style.container}>
            <TextField {...register("user")}  className={style.validar} id="outlined-basic" label="Usuario" variant="outlined" 
            inputProps={{
              pattern:user.exp,
              title:user.msg
            }}
            required
            />
            <TextField {...register("password")}  className={style.validar} id="outlined-basic" label="Contraseña" variant="outlined" 
            type="password" 
            inputProps={{
              pattern:pass.exp,
              title:pass.msg
            }}
            required
            />
        </div>
    </>
  )
}