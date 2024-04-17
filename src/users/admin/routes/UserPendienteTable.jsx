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
import {columnasTableUserPendiente,columnasTableOrgPendienteOr,columnasTableOrgPendienteOb, columnasTableOrgPendienteOd}  from '../js/table.js'
import axios from 'axios';
import Alert from '@mui/material/Alert';
import { useStore } from "../../../controllers/Auth.js"

export const UserPendienteTable = () => {
    const [selectUser, setSelectUser] = useState('');
    const [selectOrg, setSelectOrg] = useState('');

    const handleChange = (event) => {
        setSelectUser(event.target.value);
    };
    const handleChangeOrg=(event)=>{
        setSelectOrg(event.target.value);
    }
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
    }, [datos])
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
                <FormControl style={{width:'40%',margin:'20px'}}>
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
                {selectUser=="voluntarios"  ? <TablaPendientes columnas={columnasTableUserPendiente} datos={datos.voluntarios} setDatos={setdatos}/> :''}
                {selectUser=="donantes_naturales" ? <TablaPendientes columnas={columnasTableUserPendiente} datos={datos.donantes_naturales} setDatos={setdatos}/> :''}
                {selectUser=="receptores_naturales"  ? <TablaPendientes columnas={columnasTableUserPendiente} datos={datos.receptores_naturales} setDatos={setdatos}/> :''}
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
            <FormControl style={{width:'40%',margin:'20px'}}>
                    <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={selectOrg}
                        label="Tipo"
                        onChange={handleChangeOrg}
                    >
                        <MenuItem value={"org_donantes"}>Organizaciones Donantes</MenuItem>
                        <MenuItem value={"org_Receptoras"}>Organizaciones Receptoras</MenuItem>
                        <MenuItem value={"org_beneficas"}>Organizaciones Beneficas</MenuItem>
                    </Select>
                </FormControl>
                {selectOrg=="org_donantes" && <TablaPendientes columnas={columnasTableOrgPendienteOd} datos={datos.encargados_donantes} setDatos={setdatos}/>}
                {selectOrg=="org_Receptoras" && <TablaPendientes columnas={columnasTableOrgPendienteOr} datos={datos.encargados_receptores} setDatos={setdatos}/>}
                {selectOrg=="org_beneficas" && <TablaPendientes columnas={columnasTableOrgPendienteOb} datos={datos.encargados_organizacion_benefica} setDatos={setdatos}/>}
            </AccordionDetails>
        </Accordion>
    </div>
  )
}
