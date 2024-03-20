import React, { useState } from 'react'
import 'animate.css';
import iconPersona from "../assets/img/donacionUser.png"
import iconEmpresa from "../assets/img/empresa.png"
import { Link } from 'react-router-dom';


import style from '../styles/containers/Register.module.css';

const Register = () => {

  const [Redireccion, setRedireccion] = useState(false)
  const handleRedireccion = () => {
    setRedireccion(true);
    setTimeout(() => {
      //window.location.href='/CreatePersona'
    }, 500); 
  };
  return (
    <div className={style.containerMain}>
        <h2>Registro</h2>
        <hr />
        <div className={`${Redireccion ? "animate__animated animate__backOutRight " : "animate__animated animate__backInLeft "} ${style.containerR}`}>
          <Link to="/CreatePersona" className={style.botonP} onClick={handleRedireccion}>
            <img src={iconPersona} alt="DonacionPersona" />Persona
          </Link>
          <Link to="/CreateEmpresa" className={style.botonP}>
            <img src={iconEmpresa} alt="DonacionPersona" />Empresa
          </Link>
        </div>

    </div>
    
  )
}

export default Register
