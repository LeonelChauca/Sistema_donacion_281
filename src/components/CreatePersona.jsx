import React, { useEffect } from 'react'
import style from '../styles/components/CreatePersona.module.css';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { PersonaRegister } from './PersonaRegister';
import 'animate.css';
import { useState } from 'react';
import { useForm } from "react-hook-form";
import PersonaDonanteRegister from './PersonaDonanteRegister';
import PersonaVoluntarioRegister from './PersonaVoluntarioRegister';
import axios from 'axios';
import Button from '@mui/material/Button';

export const CreatePersona = () => {

    const [selectP, setselectP] = useState('');
    const handleChange = (event) => {
        setselectP(event.target.value);
    };
    const { register, handleSubmit,formState: { errors },setValue } = useForm()
    const onSubmit = (data) => {
        data.ci = parseInt(data.ci);
        data.nro_cel = parseInt(data.nro_cel);
        console.log(data);
        axios.post('https://proyecto-281-production.up.railway.app/api/auth/new',data)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
      }
  return (
    <div  className={"animate__animated animate__backInLeft "+style.containerMain}>
        <h1>Tipo de persona :</h1>
        <form className={style.containerF} onSubmit={handleSubmit(onSubmit)}>
            <FormControl className={style.containerSelect}>
            <FormHelperText>Seleccione un las las opciones</FormHelperText>
                <Select
                    displayEmpty
                    value={selectP}
                    {...register("tipo")}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value={"Voluntario"}>Voluntario</MenuItem>
                    <MenuItem value={"Donante"}>Donante</MenuItem>
                    <MenuItem value={"Receptor"}>Receptor</MenuItem>
                </Select>
                
            </FormControl>
            <Box className={style.boxC}>
                    {selectP=="Donante" ?<div><PersonaRegister register={register} /> <PersonaDonanteRegister register={register} setValue={setValue}/></div>  :''}
                    {selectP=="Voluntario" ? <div><PersonaRegister register={register} /> <PersonaVoluntarioRegister register={register}/></div> :''}
            </Box>
            <Button className={style.btnGuardar} variant="contained" type="submit" disabled={selectP==""}>Guardar</Button>
        </form>
        
    </div>
  )
}