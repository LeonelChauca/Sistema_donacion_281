import { useState,createContext, useContext, useEffect } from "react";
import {TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControlLabel, FormLabel, FormHelperText } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import { Tipoinp } from "../../../donante/routes/Realizar-donacion/Tipoinp";
import { tipoAlimento } from "../../../donante/routes/Realizar-donacion/tiposProducto";
import Autocomplete from '@mui/material/Autocomplete';

import style from '../../../donante/styles/realizarDonacionAlimento.module.css'
import { ProductContext } from "../../../donante/Dontante";
import {AlertaOkAddListaDonacion,AlertaNoAddListaDonacion} from '../../../donante/routes/sweetAlertDonante';
import Paper from '@mui/material/Paper';

export const RealizaSolDonacionAlimento = () => {
    const { Productos,actualizarId,agregarDinero,agregarAlimento} = useContext(ProductContext);
    const { register, handleSubmit,formState,setValue } = useForm()
    const [tipo, setTipo] = useState('');  
  
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
            <Tipoinp register={register} tipo={tipo} setTipo={setTipo} valorTipo={tipoAlimento} />
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={tipoAlimento[tipo] || []}
                noOptionsText="Elija primero el tipo de producto"
                sx={{ width:'100%' }}
                renderInput={(params) => <TextField {...register("nombre_a")} {...params} disabled={formState.isSubmitting} label="Nombre de Alimento" />}
            />
            <TextField {...register("cantidad_a")}   label="Cantidad" variant="outlined" type="number"/>
            <TextField {...register("medida_unitaria_a")} label="Medida Unitaria" value={'Unidades'}  variant="outlined" type="text"/>
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
        </form>  )
}
