import {useState,createContext,useContext,useEffect, useRef} from 'react'
import Button from '@mui/material/Button';
import style from '../../../donante/styles/realizarDonacionAlimento.module.css'
import { ProductContext } from "../../../donante/Dontante";
import { useForm } from "react-hook-form";
import dayjs from 'dayjs'
import {TextField } from '@mui/material';

import {AlertaOkAddListaDonacion,AlertaNoAddListaDonacion} from '../../../donante/routes/sweetAlertDonante';
import { tipoProducto } from '../../../donante/routes/Realizar-donacion/tiposProducto';
import { Tipoinp } from '../../../donante/routes/Realizar-donacion/Tipoinp';
import Autocomplete from '@mui/material/Autocomplete';
import Paper from '@mui/material/Paper';
export const RealizaSolDonacionProducto = () => {
  const form_control_producto = useRef(); 
    const { Productos,actualizarId,agregarDinero,agregarAlimento,agregarProducto} = useContext(ProductContext);
  const { register, handleSubmit,formState,setValue } = useForm();
  const [tipo, setTipo] = useState('');  
  
  const onSubmit=(data)=>{
    try{
      agregarProducto({...data});
      AlertaOkAddListaDonacion();
      form_control_producto.current.reset(); 
      setTipo(''); 
    }
    catch{
      AlertaNoAddListaDonacion();
    }
  }
  return (
    <form  ref={form_control_producto} className={style.container} onSubmit={handleSubmit(onSubmit)}>
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
