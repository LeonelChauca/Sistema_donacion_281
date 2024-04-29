import React, { useState } from 'react'
import Button from '@mui/material/Button';
import {useStore} from '../../../../controllers/Auth.js'
import {AlertaErrorEncargado,ConfirmacionOkEncargado} from '../../js/swetAlertAdmin.js'
import Axios from 'axios';


export const BotonesRd = ({idUser,idDon,setAct,Act,ruta}) => {
    const token=useStore((state)=>state.token);
    const data={
        'id_user':idUser,
        'id_donacion':idDon,
        'id_solicitud':idDon,
    }
    const Accion=()=>{
        Axios.post(ruta,data,{
            headers:{
                'x-token':token,
            }
        })
    }
    const HandleClick=()=>{
        ConfirmacionOkEncargado("Esta seguro de Seleccionar como Encargado voluntario?","No podras revertir esto!",Accion,setAct,Act);
    }
  return (
    <div>
        <Button variant="contained" href="#contained-buttons" color='success' onClick={HandleClick}>
            Seleccionar como encargado
        </Button>
    </div>
  )
}
