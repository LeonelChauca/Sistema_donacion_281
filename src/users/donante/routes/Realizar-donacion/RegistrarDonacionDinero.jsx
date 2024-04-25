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
import style from '../../styles/realizarDonacionAlimento.module.css'
import { ProductContext } from "../../Dontante";
import {AlertaOkAddListaDonacion,AlertaNoAddListaDonacion} from '../sweetAlertDonante';
import Paper from '@mui/material/Paper';

import dayjs from 'dayjs'

export const RegistrarDonacionDinero = () => {
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
    }
    catch{
      AlertaNoAddListaDonacion();
    }
  }
  return (
    <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={style.imgDiv2}>
            <h2>Dinero</h2>
        </div>
        <Paper elevation={8} style={{margin:'20px 0',padding:'20px',textAlign:'center'}}>
            <h4>¡Tu contribución financiera es una fuerza poderosa para el cambio! Con tu donación, podemos seguir apoyando causas importantes y brindar ayuda a quienes más lo necesitan. ¡Haz tu donación hoy y únete a nosotros en nuestro compromiso de hacer del mundo un lugar mejor!</h4>
        </Paper>
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
            <MenuItem value={"bolivianos"}>Bs. Bolivianos</MenuItem>
            <MenuItem value={"dolares"}>$ Dolares</MenuItem>
          </Select>
        </FormControl>  
      </div>
      <Button variant="contained" type="submit">Agregar donacion</Button>
    </form>
  )
}  
