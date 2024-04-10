import React, { useState } from 'react'
import style from '../styles/realizarDonacion.module.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

import FormLabel from '@mui/material/FormLabel';
import { RegistrarDonacionProducto } from './Realizar-donacion/RegistrarDonacionProducto';
import { RegistrarDonacionAlimento } from './Realizar-donacion/RegistrarDonacionAlimento';
import { RegistrarDonacionDinero } from './Realizar-donacion/RegistrarDonacionDinero';
import { ListaDonacion } from './Realizar-donacion/ListaDonacion';

export const RealizarDonacion = ({tabla,setTabla}) => {
    const [groupRadio, setgroupRadio] = useState('');
    const [donaciones, setdonaciones] = useState([{}]);
    const handleChange = (event) => {
        setgroupRadio(event.target.value);
    };
  return (
    <div className={style.containerMain}>
        <h2>Realiza Donacion</h2>
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
                        <FormControlLabel value="Alimento" control={<Radio />} label="Alimento" />
                    </RadioGroup>
                </FormControl>
                { groupRadio == "Producto" && <RegistrarDonacionProducto tabla={donaciones} setTabla={setdonaciones} />}
                { groupRadio == "Dinero" && <RegistrarDonacionDinero tabla={donaciones} setTabla={setdonaciones} />}
                { groupRadio == "Alimento"&& <RegistrarDonacionAlimento tabla={donaciones} setTabla={setdonaciones}/>}
            </div>
        </div>
    </div>
  )
}
