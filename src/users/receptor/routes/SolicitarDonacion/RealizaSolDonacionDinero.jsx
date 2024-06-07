import { useState,createContext, useContext, useEffect, useRef } from "react";
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
import style from '../../../donante/styles/realizarDonacionAlimento.module.css'
import { ProductContext } from "../../../donante/Dontante";
import {AlertaOkAddListaDonacion,AlertaNoAddListaDonacion} from '../../../donante/routes/sweetAlertDonante';
import Paper from '@mui/material/Paper';
export const RealizaSolDonacionDinero = () => {
     const form_control_money = useRef(); 
    const [cambio, setCambio] = useState('');
    const { Productos,actualizarId,agregarDinero} = useContext(ProductContext);
    useEffect(() => {
      console.log("Productos actualizados:", Productos);
    }, [Productos]);
    const handleChange = (event) => {
      setCambio(event.target.value);
    };
    const { register, handleSubmit,formState: { errors },setValue } = useForm()

    const onSubmit=(data)=>{
        try{
            agregarDinero({...data});
            AlertaOkAddListaDonacion();
            form_control_money.current.reset();             
        }
        catch{
            AlertaNoAddListaDonacion();
        }
    }
    return (
        <form ref={form_control_money} className={style.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.containerMain}>
        <TextField {...register("monto")} label="Monto" variant="outlined" type="number"/>
        <FormControl>
          <InputLabel id="demo-simple-select-label">cambio</InputLabel>
          <Select
            displayEmpty
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cambio}
            label="cambio"
            {...register("cambio")}
            onChange={handleChange} 
          >
            <MenuItem value={"Boliviano(s)"}>Bs. Bolivianos</MenuItem>
            <MenuItem value={"Dolar(es)"}>$ Dolares</MenuItem>
          </Select>
        </FormControl>  
      </div>
      <Button variant="contained" type="submit">Agregar a la lista solicitud</Button>
    </form>
      )
}
