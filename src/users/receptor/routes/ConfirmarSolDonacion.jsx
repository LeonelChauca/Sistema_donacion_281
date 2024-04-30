import { useState, useContext, useEffect } from "react";
import style from '../../donante/styles/realizarDonacion.module.css'
import Typography from '@mui/material/Typography';
import { ProductContext } from "../../donante/Dontante";
import {createDataAlimento,createDataDinero,createDataProducto} from '../../donante/routes/Confirma-donacion/columnas.js';
import {TableSimple} from "../../donante/routes/Confirma-donacion/TableSimple";
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import CircularProgress from '@mui/material/CircularProgress';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useStore } from "../../../controllers/Auth.js"
import {okConfirmacion,errorFConfirmacion} from "../../donante/js/alertas.js";
import Alert from '@mui/material/Alert';

import setScrollTop from "../../../controllers/setPostScroll.js";

import Axios from "axios";
export const ConfirmarSolDonacion = () => {
    const today = dayjs();
  const { Productos,actualizarId,actualizarFechaS,eliminarTodosLosDatos} = useContext(ProductContext);
  const idUser=useStore((state)=>state.id_user);
  const token=useStore((state)=>state.token);

    useEffect(() => {
        console.log(Productos);
    }, [])
    
    
    const [loading, setloading] = useState(false);
    const formatoFecha=(date)=>{
        if(!date){ return ""}
        return date.format("YYYY-MM-DD");
    }
    const onsubmit=(event)=>{
      event.preventDefault();
      actualizarId(localStorage.getItem('id_user'));
      const fechaSeleccionada=Productos.fecha_solicitud;
      if(fechaSeleccionada && dayjs(fechaSeleccionada).isAfter(today) || dayjs(fechaSeleccionada).isSame(today, 'day')){
        setloading(true);  
        Axios.post('https://proyecto-281-production.up.railway.app/api/delivery/addSolicitud',Productos,{
              headers:{
                  'x-token':token
              },
          })
          .then((response)=>{
              okConfirmacion();
              console.log(response);
              console.log(Productos);
              eliminarTodosLosDatos();
          })
          .catch((res)=>{
            setloading(false); 
        })
          .finally(() => {
              setloading(false); 
          })
      }
      else{
          errorFConfirmacion();
          setloading(false); 
    
      }
  }

  useEffect(()=>{
    setScrollTop(0); 
  },[])
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
                            onChange={(date) => actualizarFechaS(formatoFecha(date))}
                            format="DD-MM-YYYY"
                            minDate={today}
                            views={['day','month','year']}
                            slotProps={{
                            textField: {
                                helperText: 'fecha que se realizara la donacion*',
                            },
                            }}
                        />
                    </LocalizationProvider>    
                </div> 
                {
                    Productos.alimento.length>0 && <div className={style.formAction}>
                        <Typography variant="h5" color="primary" >DONACION TIPO ALIMENTO</Typography>
                        <TableSimple rows={Productos.alimento} columns={createDataAlimento}/>
                    </div>
                }
                {
                    Productos.dinero.length>0 &&<div className={style.formAction}>
                        <Typography variant="h5" color="primary">DONACION TIPO DINERO</Typography>
                        <TableSimple rows={Productos.dinero} columns={createDataDinero}/>
                    </div>
                }
                {
                    Productos.producto.length>0 && <div className={style.formAction}>
                        <Typography variant="h5" color="primary">DONACION TIPO PRODUCTO</Typography>
                        <TableSimple rows={Productos.producto} columns={createDataProducto}/>
                    </div>
                }
                {
                    Productos.alimento.length===0 && Productos.dinero.length===0 && Productos.producto.length===0 ? <div className={style.formAction}>
                        <Alert severity="error" style={{margin:'20px 0'}}>No existen donaciones para confirmar</Alert>
                        <Button disabled variant="contained" type="submit">Realizar Donacion</Button>
                    </div>
                    :<div className={style.formAction}>
                        {
                            !loading ? <Button variant="contained" type="submit">Realizar Donacion</Button> : <Button disabled variant="contained" type="submit"><CircularProgress size={20} thickness={5} /></Button> 
                        }
                    </div>
                }
                
                
            </form>
            
        </div>
  )
}
