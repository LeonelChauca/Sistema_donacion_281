import React, { useEffect, useState } from 'react'
import style from '../../css/ResponsableDonacion.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { TableRD } from '../Responsable-donacion/TableRD';
import { useStore } from "../../../../controllers/Auth"
import {createDataRD} from '../Responsable-donacion/columnas'
import Axios from 'axios';
import Alert from '@mui/material/Alert';
export const SresponsableEntrega = () => {
    const token=useStore((state)=>state.token);
    const [Act, setAct] = useState(false);
    const [data,setData] = useState([]);
    useEffect(() => {
        Axios.get('https://proyecto-281-production.up.railway.app/api/delivery/getPendingSolicitudesResponsableAdmin',{
            headers:{
                'x-token': token
            }
        })
        .then((response)=>{
            console.log(response);
            setData([...response.data.solicitudes]);
        })
    }, [Act])
    
  return (
    <div className={style.containerMain}>
        <h2>Responsable Entrega</h2>
        <div className={style.containerVista}>
            {
                data.length===0 ? <Alert severity='info'>No existen donaciones pendientes</Alert> :
                data.map((dats) => (
                    <Accordion key={dats.id_solicitud} className={style.containerAcor}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                        <Typography>Nro. de entrega: {dats.id_solicitud}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <TableRD columns={createDataRD} rows={dats.postulantes} idDon={dats.id_solicitud} setAct={setAct} Act={Act} ruta={'https://proyecto-281-production.up.railway.app/api/delivery/confirmarResponsableDelivery'}/>
                            </AccordionDetails>
                    </Accordion>
                ))
                  
            }
            
        </div>
    </div>
  )
}
