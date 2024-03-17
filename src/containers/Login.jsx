import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import style from '../styles/containers/Login.module.css';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import { useForm } from "react-hook-form";


import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormularioLogin from '../components/FormularioLogin';
const Login =()=>{
    
    return (
        <div className={style.containerL}>
            <h2>Iniciar Sesion</h2>
            <hr />
            <FormularioLogin />
        </div>
    )
 }
 
 export default Login ; 