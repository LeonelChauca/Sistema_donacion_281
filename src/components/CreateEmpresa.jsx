import React, { useEffect, useRef } from 'react'
import style from '../styles/components/CreatePersona.module.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import CircularProgress from '@mui/material/CircularProgress';
import { AlertaOkRegistro, AlertaErrorRegistro } from './sweetAlert.js';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { PersonaRegister } from './PersonaRegister';
import axios from 'axios';
import 'animate.css';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import OrganizacionRegistro from './OrganizacionRegistro';
import Button from '@mui/material/Button';
import { useStore } from '../controllers/Auth.js';

export const CreateEmpresa = () => {
   const form_ref1= useRef(); 
  const setLogged = useStore((state)=>state.setLogged) 
  const [Loading, setLoading] = useState(false);

  const [selectP, setselectP] = useState('');
    const handleChange = (event) => {
        setselectP(event.target.value);
    };
    const { register, handleSubmit,formState: { errors },setValue } = useForm()
    const onSubmit = (data) => {
      setLoading(true);
        axios.post('https://proyecto-281-production.up.railway.app/api/auth/new',data)
        .then(response => {
       
 //         console.log(response.data.ok);
   //       setLogged(response.data.ok); 
            AlertaOkRegistro();                          
        }).then((respuesta)=>{
          form_ref1.current.reset();             
        })
        .catch(error => {
            console.log(error);
            AlertaErrorRegistro(error.response.data.msg)
        })
        .finally(()=>{
          setLoading(false);
        })
      }
  return (
    <>
      <div  className={"animate__animated animate__backInLeft "+style.containerMain}>
        <h1>Tipo de organizacion :</h1>
        <form  ref={form_ref1} className={style.containerF} onSubmit={handleSubmit(onSubmit)}>
            <FormControl className={style.containerSelect}>
                <Select
                    displayEmpty
                    value={selectP}
                    {...register("tipo")}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value={"orgDonante"}>Org. Donante</MenuItem>
                    <MenuItem value={"orgReceptora"}>Org. Receptor</MenuItem>
                    <MenuItem value={"orgBenefica"}>Org. Benefica</MenuItem>
                </Select>
                <FormHelperText>Elije uno*</FormHelperText>
            </FormControl>
            <Box className={style.boxC}>
                    
                    {selectP=="orgDonante" ? <div> <hr /> <h4>Primeramente registra la persona que se encargara de la empresa :</h4>  <PersonaRegister  register={register}/> <OrganizacionRegistro register={register} setValue={setValue}/> </div>:''}
                    {selectP=="orgReceptora" ? <div> <hr /> <h4>Primeramente registra la persona que se encargara de la empresa :</h4>  <PersonaRegister  register={register}/> <OrganizacionRegistro register={register} setValue={setValue}/></div> :''}
                    {selectP=="orgBenefica" ? <div> <hr /> <h4>Primeramente registra la persona que se encargara de la empresa :</h4>  <PersonaRegister  register={register}/> <OrganizacionRegistro register={register} setValue={setValue}/></div> :''}
            </Box>
            {Loading ? <Button className={style.btnGuardar} variant="contained" type="submit" disabled={selectP=="" || Loading}> <CircularProgress size={25}/></Button>
              : <Button className={style.btnGuardar} variant="contained" type="submit" disabled={selectP==""}>Postular</Button>
            }
            
        </form>
        
    </div>
    </>
  )
}
