import React from 'react'
import 'animate.css';
import iconPersona from "../assets/img/donacionUser.png"
import iconEmpresa from "../assets/img/empresa.png"

import style from '../styles/containers/Register.module.css';
import PersonIcon from '@mui/icons-material/Person';

const Register = () => {
    
  return (
    <div className={style.containerMain}>
        <h2>Registro</h2>
        <hr />
        <div className={"animate__animated animate__backInLeft " + style.containerR} >
             
            <button className={style.botonP}> <img src={iconPersona} alt="DonacionPersona" />Persona</button>
            <button className={style.botonP}> <img src={iconEmpresa} alt="DonacionPersona" />Empresa</button>

        </div>
    </div>
    
  )
}

export default Register
