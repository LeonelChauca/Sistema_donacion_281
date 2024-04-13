import {TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useState,createContext, useContext, useEffect } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControlLabel, FormLabel, FormHelperText } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import style from '../../styles/realizarDonacionAlimento.module.css'
import { ProductContext } from "../../Dontante";
import { useForm } from "react-hook-form";
import dayjs from 'dayjs'
import {AlertaOkAddListaDonacion,AlertaNoAddListaDonacion} from '../sweetAlertDonante';

export const RegistrarDonacionProducto = () => {
  const { Productos,actualizarId,agregarDinero,agregarAlimento,agregarProducto} = useContext(ProductContext);
  const { register, handleSubmit,formState: { errors },setValue } = useForm()  
  const onSubmit=(data)=>{
    try{
      agregarProducto({...data});
      AlertaOkAddListaDonacion();
    }
    catch{
      AlertaNoAddListaDonacion();
    }
  }

  const [tipo, setTipo] = useState('');

  const handleChange = (event) => {
    setTipo(event.target.value);
  };
  return (
    <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.containerMain}>
          <TextField {...register("nombre_p")}  label="Nombre de producto" variant="outlined" type="text"/>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
              <Select
                {...register("tipo_p")}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tipo}
                label="tipo-cambio"
                onChange={handleChange}
              >
                <MenuItem value={"higiene"}>Higiene</MenuItem>
              </Select>
          </FormControl>
          <TextField {...register("cantidad_p")} label="Cantidad" variant="outlined" type="number"/>
          <TextField {...register("medida_unitaria_p")} label="Medida Unitaria" variant="outlined" type="text"/>

          
        </div>
        <Button variant="contained" type='submit'>Agregar donacion</Button>
    </form>
  )
}
