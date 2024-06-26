import { useState,createContext, useContext, useEffect, useRef } from "react";
import style from '../../donante/styles/realizarDonacion.module.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Fab from '@mui/material/Fab';
import { ProductContext } from '../../donante/Dontante';

import AddIcon from '@mui/icons-material/Add';

import FormLabel from '@mui/material/FormLabel';
import MenuItem from '@mui/material/MenuItem'
import { RealizaSolDonacionProducto } from "./SolicitarDonacion/RealizaSolDonacionProducto";
import { RealizaSolDonacionDinero } from "./SolicitarDonacion/RealizaSolDonacionDinero";
import { RealizaSolDonacionAlimento } from "./SolicitarDonacion/RealizaSolDonacionAlimento";


import setScrollTop from "../../../controllers/setPostScroll.js";
export const SolicitarDonacion = () => {


  const [groupRadio, setgroupRadio] = useState('');
    const handleChange = (event) => {
        setgroupRadio(event.target.value);
    };


    useEffect(()=>{
        setScrollTop(0); 
    },[])
  return (
    <div className={style.containerMain}>
        <h2>Solicita una  Donacion</h2>
        <div className={style.containerForm}> 
            <div className={style.formAction}>
                <h2>Tipo de donacion</h2>
                <FormControl>
                    <FormLabel id="demo-row-radio-buttons-group-label">Selecciona una opcion :</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                        value={groupRadio}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="Producto" control={<Radio />} label="Producto" />
                        <FormControlLabel value="Dinero" control={<Radio />} label="Dinero" />
                        <FormControlLabel value="Alimento" control={<Radio />} label="Alimento" type="select"/>
                    </RadioGroup>
                </FormControl>
                { groupRadio == "Producto" && <RealizaSolDonacionProducto/>}
                { groupRadio == "Dinero" && <RealizaSolDonacionDinero/>}
                { groupRadio == "Alimento"&& <RealizaSolDonacionAlimento/>}
            </div>
        </div>
    </div>
  )
}
