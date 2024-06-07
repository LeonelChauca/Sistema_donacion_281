import { useState,createContext, useContext, useEffect, useRef } from "react";
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
import { tipoAlimento } from "./tiposProducto";
import {AlertaOkAddListaDonacion,AlertaNoAddListaDonacion} from '../sweetAlertDonante';
import { Tipoinp } from "./Tipoinp";
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';




export const RegistrarDonacionAlimento = () => {
  const form_ref_donAlim  =useRef(); 
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
      form_ref_donAlim.current.reset();  
      setTipo((old)=>''); 
      
    }
    catch{
      AlertaNoAddListaDonacion();
    }
  }

  return (
    <form ref={form_ref_donAlim} className={style.container} onSubmit={handleSubmit(onSubmit)} >
        <div className={style.imgDiv3}>
            <h2>Alimento</h2>
        </div>
        <Paper elevation={8} style={{margin:'20px 0',padding:'20px',textAlign:'center'}}>
            <h4>¡Tu donación de alimentos puede llenar los corazones hambrientos y alimentar el futuro! Cada grano de arroz, cada lata de comida, cuenta. Únete a nosotros en nuestra misión de combatir el hambre y proporcionar alimentos nutritivos a quienes más lo necesitan. ¡Haz tu donación hoy y marca la diferencia en la vida de alguien!</h4>
        </Paper>
        <div className={style.containerMain}>
          <Tipoinp register={register} tipo={tipo} setTipo={setTipo} valorTipo={tipoAlimento}  />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={tipo!=''?tipoAlimento[tipo] : []}
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
                onChange={(date) => setValue("caducidad_a", formatoFecha(date))}
            />
          </LocalizationProvider>
          
        </div>
        <Button variant="contained" type="submit">Agregar donacion</Button>
    </form>
    
  )
}
