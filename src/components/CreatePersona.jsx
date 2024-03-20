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

export const CreatePersona = () => {

    const [selectP, setselectP] = useState('');
    const handleChange = (event) => {
        setselectP(event.target.value);
    };
    const { register, handleSubmit,formState: { errors } } = useForm()
    const onSubmit = (data) => {
        console.log(data);
      }
  return (
    <div  className={"animate__animated animate__backInLeft "+style.containerMain}>
        <h1>Tipo de persona :</h1>
        <form className={style.containerF} onSubmit={handleSubmit(onSubmit)}>
            <FormControl className={style.containerSelect}>
                <Select
                    displayEmpty
                    value={selectP}
                    {...register("tipo")}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                    >
                    <MenuItem value={"Voluntario"}>Voluntario</MenuItem>
                    <MenuItem value={"Donante"}>Donante</MenuItem>
                    <MenuItem value={"Donado"}>Donado</MenuItem>
                </Select>
                <FormHelperText>Elije uno*</FormHelperText>
            </FormControl>
            <Box className={style.boxC}>
                    {selectP=="Donante" ? <PersonaRegister register={register}/> :''}
                    {selectP=="Voluntario" ? <PersonaRegister register={register}/> :''}
            </Box>
            <button type='submit'>Enviar</button>
        </form>
        
    </div>
  )
}