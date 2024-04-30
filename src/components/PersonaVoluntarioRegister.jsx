import {useEffect, useState} from 'react'
import style from '../styles/components/PersonaRegister.module.css';
import { Grid, TextField } from '@mui/material';
import  Mapa  from './Mapa';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput'
import 'animate.css';
const PersonaVoluntarioRegister = ({register}) => {
  const [selectT, setselectT] = useState('');
  const [horario, sethorario] = useState('');
    const handleChange = (event) => {
        setselectT(event.target.value);
        switch(event.target.value){
          case "Manana":
            sethorario("8:00 - 12:00")
            break;
          case "Tarde":
            sethorario("12:00 - 16:00")
            break;
          case "Noche":
            sethorario("16:00 - 20:00")
            break;
        }
    };
  return (
    <div>
        <h4>Datos del Voluntario</h4>
        <div className={' animate__animated animate__fadeInDown '+style.container} >
            <Select 
                    displayEmpty         
                    defaultValue={""}
                    {...register("turno")}
                    onChange={handleChange}
                    >
                    <MenuItem value={"Manana"}>Mañana</MenuItem>
                    <MenuItem value={"Tarde"}>Tarde</MenuItem>
                    <MenuItem value={"Noche"}>Noche</MenuItem>
            </Select>
            {
              <TextField className={style.validar}  {...register("horario")} label="Horario" variant="outlined" 
              required value={horario}
              />
            }
        </div>
    </div>
  )
}

export default PersonaVoluntarioRegister
