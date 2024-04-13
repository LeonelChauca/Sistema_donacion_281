import { useState,createContext, useContext, useEffect } from "react";
import {TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControlLabel } from '@mui/material';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import style from '../../styles/realizarDonacionAlimento.module.css'
import { ProductContext } from "../../Dontante";
import dayjs from 'dayjs'
import {AlertaOkAddListaDonacion,AlertaNoAddListaDonacion} from '../sweetAlertDonante';



export const RegistrarDonacionAlimento = () => {
  const { Productos,actualizarId,agregarDinero,agregarAlimento} = useContext(ProductContext);
  const { register, handleSubmit,formState: { errors },setValue } = useForm()
  const formatoFecha=(date)=>{
    return date.format("DD-MM-YYYY");
  }
  const onSubmit=(data)=>{
    try{
      agregarAlimento({...data});
      AlertaOkAddListaDonacion();
    }
    catch{
      AlertaNoAddListaDonacion();
    }
  }

  return (
    <form className={style.container} onSubmit={handleSubmit(onSubmit)} >
        <div className={style.containerMain}>
          
          <TextField {...register("nombre_a")}  label="Nombre del Alimento" variant="outlined" type="text"/>
          <TextField {...register("cantidad_a")}   label="Cantidad" variant="outlined" type="number"/>
          <TextField {...register("medida_unitaria_a")} label="Medida Unitaria" variant="outlined" type="text"/>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                {...register("caducidad_a")} 
                name="caducidad_a" 
                label="Fecha de caducidad"
                value={null}
                onChange={(date) => setValue("caducidad_a", formatoFecha(date))}
            />
          </LocalizationProvider>
          
        </div>
        <Button variant="contained" type="submit">Agregar donacion</Button>
    </form>
    
  )
}
