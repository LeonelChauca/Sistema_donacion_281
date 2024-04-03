import React from 'react'
import IconButton from '@mui/material/IconButton';
import { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import CircularProgress from '@mui/material/CircularProgress';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import style from '../styles/containers/Login.module.css';
import Avatar from '@mui/material/Avatar';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Link from '@mui/material/Link';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';
import ErrorIcon from '@mui/icons-material/Error';
import Alert from '@mui/material/Alert';
import { useForm } from "react-hook-form";
import axios  from 'axios';
import { useStore } from "../controllers/Auth.js"
import * as jose from 'jose'
const FormularioLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const [errorMessage, setErrorMessage] = useState(false);
  const {setUser,setToken,setLogged,setLogin,setRol} = useStore();
  const [Loading, setLoading] = useState(false);
   const user={
    exp:"[a-zA-Z][a-zA-Z0-9]{3,15}", 
    title:"Usuario Invalido"
   }

   const pass={
    exp:"[a-zA-Z0-9]{5,}", 
    title:"Password Invalido"
   }
   

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { register, handleSubmit,formState: { errors } } = useForm()
  const onSubmit = (data) => {
    setLoading(true);
    setErrorMessage(null);
    axios.post('https://proyecto-281-production.up.railway.app/api/auth/', data)
    .then(response => {
      if(response.status=='200'){
        console.log(response); 
        const jwtDecode=jose.decodeJwt(response.data.token) 
        setUser(jwtDecode.name);
        setToken(response.data.token);
        setLogged(response.data.ok);
        setRol(jwtDecode.tipo)
        setLogin(true);
      }
    })
    .catch(error => {
      console.log(error);
      if (error.response) {
        setErrorMessage(error.response.data.msg);
      }
      setLoading(false);
    })
  }
  return (
    <form action="" className={style.formControl} onSubmit={handleSubmit(onSubmit)}  >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <div className={style.textN}>
                  <TextField className={style.textN} {...register("user",{required:true})} id="outlined-basic" label="Usuario" variant="outlined"                   
                  inputProps={{
                    pattern: user.exp,
                    title:user.title
                  }}
                  required
                  />
                  {errors.user && <div className={style.errorT}> <ErrorIcon></ErrorIcon> <p>Este campo es requerido.</p></div> }
                </div> 
                <div className={style.textN}> 
                  <FormControl className={style.textN}  variant="outlined" 
                  >
                      <InputLabel htmlFor="outlined-adornment-password" >Password</InputLabel>
                      <OutlinedInput
                          id="outlined-adornment-password"
                          type={showPassword ? 'text' : 'password'}
                          {...register("password",{required:true})}
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
                          inputProps={{
                            pattern: user.exp,
                            title:user.title
                          }}
                          required
                      />
                  </FormControl>                  
                  {errors.password && <div className={style.errorT}> <ErrorIcon></ErrorIcon> <p>Este campo es requerido.</p></div> }

                </div>
                {
                  Loading 
                  ? <Button
                        type="submit"
                        variant="contained"
                        className={style.submit}
                        onClick={handleSubmit(onSubmit)}
                        disabled
                        >
                        <CircularProgress size={25}/>
                    </Button>
                  : <Button
                        type="submit"
                        variant="contained"
                        className={style.submit}
                        onClick={handleSubmit(onSubmit)}
                        >
                        Iniciar Sesión
                    </Button>
                }
                
                {errorMessage && <Alert variant="filled" severity="error" className={style.navAlert}>
                    {errorMessage}
                </Alert>}
                
                <div className={style.contText}>
                    <div>
                        <Link href="#" variant="body2">
                        Se te olvido la contraseña
                        </Link>
                    </div>
                    <div >
                        <Link component={RouterLink}  to="/registro" variant="body2">
                        Crear una nueva cuenta
                        </Link>
                    </div>
                </div>
    </form>
  )
}

export default FormularioLogin
