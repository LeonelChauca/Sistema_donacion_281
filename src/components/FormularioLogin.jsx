import React from 'react'
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import style from '../styles/containers/Login.module.css';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useForm } from "react-hook-form";
import axios  from 'axios';

const FormularioLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { register, handleSubmit,formState: { errors } } = useForm()
  const onSubmit = (data) => {
    axios.post('https://proyecto-281-production.up.railway.app/api/auth/', data)
    .then(response => {
      console.log(response)
    })
  }
  return (
    <form action="" className={style.formControl} onSubmit={handleSubmit(onSubmit)} >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar> 
                <TextField className={style.textN} {...register("user")} id="outlined-basic" label="Usuario" variant="outlined" />
                <FormControl className={style.textN}  variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        {...register("password")}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <Button
                    type="submit"
                    variant="contained"
                    className={style.submit}
                    onClick={handleSubmit(onSubmit)}
                    >
                    Iniciar Sesion
                </Button>
                <Alert variant="filled" severity="error" className={style.navAlert}>
                    Usuario o contraseña incorrecta
                </Alert>
                <div className={style.contText}>
                    <div>
                        <Link href="#" variant="body2">
                        Forgot password?
                        </Link>
                    </div>
                    <div >
                        <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                        </Link>
                    </div>
                </div>
    </form>
  )
}

export default FormularioLogin
