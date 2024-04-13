import React, { useEffect, useState } from 'react'
import style from '../../css/ResponsableDonacion.module.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { TableRD } from './TableRD';
import { useStore } from "../../../../controllers/Auth"
import {createDataRD} from './columnas'
import Axios from 'axios';
export const ResponsableDonacion = () => {
    const token=useStore((state)=>state.token);
    const [Act, setAct] = useState(false);
    const [data,setData] = useState([]);
    useEffect(() => {
        Axios.get('https://proyecto-281-production.up.railway.app/api/donation/getPendingDonationsAdmin',{
            headers:{
                'x-token': token
            }
        })
        .then((response)=>{
            console.log(response);
            setData([...response.data.donaciones]);
        })
    }, [Act])
    
  return (
    <div className={style.containerMain}>
        <h2>Responsable donaciones</h2>
        <div className={style.containerVista}>
            {
                data.map((dats) => (
                    <Accordion key={dats.id_donacion} className={style.containerAcor}>
                        <AccordionSummary
                            expandIcon={<ArrowDropDownIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                        <Typography>Nro. de donación: {dats.id_donacion}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>Publicado en fecha: {dats.fecha_d}</Typography>
                                <TableRD columns={createDataRD} rows={dats.postulantes} idDon={dats.id_donacion} setAct={setAct} Act={Act}/>
                            </AccordionDetails>
                    </Accordion>
                ))
                  
            }
            
        </div>
    </div>
  )
}
