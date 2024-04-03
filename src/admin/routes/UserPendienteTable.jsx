import React, { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import style from '../css/UserPendienteTable.module.css'
import PersonIcon from '@mui/icons-material/Person';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { TablaPendientes } from './TablaPendientes';
import columnasTableUserPendiente from '../js/table.js'
import axios from 'axios';
import { useStore } from "../../controllers/Auth.js"

export const UserPendienteTable = () => {
    const [selectUser, setSelectUser] = React.useState('');

    const handleChange = (event) => {
        setSelectUser(event.target.value);
    };
    const [datos, setdatos] = useState([])
    const token=useStore((state)=>state.token);
    useEffect(() => {
      axios.get('https://proyecto-281-production.up.railway.app/api/review/userPendings',{
        headers:{
            'x-token':token
        }
      })
      .then((response)=>{
        setdatos(response.data);
      })
    }, [])
  return (
    <div className={style.containerPt}>
        <Accordion className={style.Accordion}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            >
            <PersonIcon color='primary'/>
            <h3>Usuarios</h3>
            </AccordionSummary>
            <AccordionDetails>
                <FormControl style={{width:'40%'}}>
                    <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectUser}
                        label="Tipo"
                        onChange={handleChange}
                    >
                        <MenuItem value={"voluntarios"}>Voluntarios</MenuItem>
                        <MenuItem value={"donantes_naturales"}>Donantes</MenuItem>
                        <MenuItem value={"receptores_naturales"}>Receptores</MenuItem>
                    </Select>
                </FormControl>
                {selectUser=="voluntarios" ? <TablaPendientes columnas={columnasTableUserPendiente} datos={datos.voluntarios}/> :''}
                {selectUser=="donantes_naturales" ? <TablaPendientes columnas={columnasTableUserPendiente} datos={datos.donantes_naturales}/> :''}
                {selectUser=="receptores_naturales"  ? <TablaPendientes columnas={columnasTableUserPendiente} datos={datos.receptores_naturales}/> :''}
                {/*<TablaPendientes columnas={columnasTableUserPendiente} datos={datos}/>*/}
            </AccordionDetails>
        </Accordion>
        <Accordion className={style.Accordion}>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2-content"
            id="panel2-header"
            >
            <BusinessCenterIcon color='primary' />
            <h3>Organizaciones</h3>
        </AccordionSummary>
            <AccordionDetails>
                <h1>hola</h1>
            </AccordionDetails>
        </Accordion>
    </div>
  )
}
