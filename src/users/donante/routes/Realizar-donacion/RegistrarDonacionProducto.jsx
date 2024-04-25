import {TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { useState,createContext, useContext, useEffect } from "react";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControlLabel, FormLabel, FormHelperText } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import style from '../../styles/realizarDonacionAlimento.module.css'
import { ProductContext } from "../../Dontante";
import { useForm } from "react-hook-form";
import dayjs from 'dayjs'
import {AlertaOkAddListaDonacion,AlertaNoAddListaDonacion} from '../sweetAlertDonante';
import { tipoProducto } from './tiposProducto';
import { Tipoinp } from './Tipoinp';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';


export const RegistrarDonacionProducto = () => {
  const { Productos,actualizarId,agregarDinero,agregarAlimento,agregarProducto} = useContext(ProductContext);
  const { register, handleSubmit,formState,setValue } = useForm();
  const [tipo, setTipo] = useState('');  
  
  const onSubmit=(data)=>{
    try{
      agregarProducto({...data});
      AlertaOkAddListaDonacion();
    }
    catch{
      AlertaNoAddListaDonacion();
    }
  }

  return (
    <form className={style.container} onSubmit={handleSubmit(onSubmit)}>
        <div className={style.imgDiv}>
            <h2>Productos</h2>
        </div>
        <Paper elevation={8} style={{margin:'20px 0',padding:'20px',textAlign:'center'}}>
            <h4>¡Cada donación cuenta! Con tu ayuda, podemos marcar la diferencia en la vida de quienes más lo necesitan. ¡ dona tus productos hoy mismo para hacer del mundo un lugar mejor</h4>
        </Paper>
        <div className={style.containerMain}>
          <Tipoinp register={register} tipo={tipo} setTipo={setTipo} valorTipo={tipoProducto}/>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tipoProducto[tipo] || []}
            noOptionsText="Elija primero el tipo de producto"
            sx={{ width:'100%' }}
            renderInput={(params) => <TextField {...register("nombre_p")} {...params} label="Nombre de producto" />}
          />
          <TextField {...register("cantidad_p")} label="Cantidad" variant="outlined" type="number"/>
          <TextField {...register("medida_unitaria_p")} label="Medida Unitaria" value={'Unidades'} variant="outlined" type="text" disabled={formState.isSubmitting}/>
        </div>
        <Button variant="contained" type='submit'>Agregar donacion</Button>
    </form>
  )
}

