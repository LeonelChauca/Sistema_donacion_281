import { useState,createContext, useContext, useEffect } from "react";
import style from '../styles/realizarDonacion.module.css'
import Typography from '@mui/material/Typography';
import { ProductContext } from "../Dontante";
import {createDataAlimento,createDataDinero,createDataProducto} from './Confirma-donacion/columnas.js';
import {TableSimple} from "./Confirma-donacion/TableSimple";
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useStore } from "../../../controllers/Auth.js"
import { useForm } from "react-hook-form";
import dayjs from 'dayjs'
import Axios from "axios";


export const ConfirmaDonacion = () => {
    const { Productos,actualizarId,actualizarFecha,agregarDinero,agregarAlimento,agregarProducto} = useContext(ProductContext);
    const idUser=useStore((state)=>state.id_user);
    const token=useStore((state)=>state.token);
    const formatoFecha=(date)=>{
        return date.format("DD-MM-YYYY");
    }
    const onsubmit=(event)=>{
        event.preventDefault();
        Axios.post('https://proyecto-281-production.up.railway.app/api/donation/addDonation',Productos,{
            headers:{
                'x-token':token
            },
        })
    }
    return (
        <div className={style.containerMain}>
            <h2>Confirma Donacion</h2>
            <form className={style.containerForm} onSubmit={(event)=>onsubmit(event)}>
                <div className={style.formAction}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            name="fecha_dn" 
                            label="Fecha de la donacion"
                            value={null}
                            onChange={(date) => actualizarFecha(formatoFecha(date))}
                            format="DD-MM-YYYY"
                            views={['day','month','year']}
                            slotProps={{
                            textField: {
                                helperText: 'fecha que se realizara la donacion*',
                            },
                            }}
                        />
                    </LocalizationProvider>    
                </div> 
                
                <div className={style.formAction}>
                    <Typography variant="h5" color="primary" >DONACION TIPO ALIMENTO</Typography>
                    <TableSimple rows={Productos.alimento} columns={createDataAlimento}/>
                </div>
                <div className={style.formAction}>
                    <Typography variant="h5" color="primary">DONACION TIPO DINERO</Typography>
                    <TableSimple rows={Productos.dinero} columns={createDataDinero}/>
                </div>
                <div className={style.formAction}>
                    <Typography variant="h5" color="primary">DONACION TIPO PRODUCTO</Typography>
                    <TableSimple rows={Productos.producto} columns={createDataProducto}/>
                </div>
                <div className={style.formAction}>
                    <Button variant="contained" type="submit">Realizar Donacion</Button>
                </div>
                
            </form>
            
        </div>
  )
}
