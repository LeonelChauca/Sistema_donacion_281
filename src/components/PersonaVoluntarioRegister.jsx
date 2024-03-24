import {useState} from 'react'
import style from '../styles/components/PersonaRegister.module.css';
import { Grid, TextField } from '@mui/material';
import  Mapa  from './Mapa';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput'
import 'animate.css';
const PersonaVoluntarioRegister = ({register}) => {
  const [selectT, setselectT] = useState('');
    const handleChange = (event) => {
        setselectT(event.target.value);
    };
  return (
    <div>
        <h4>Datos del Voluntario</h4>
        <div className={' animate__animated animate__fadeInDown '+style.container} >
            <TextField className={style.validar}  {...register("horario")} label="Horario" variant="outlined" 
            required
            />
            
            <Select 
                    displayEmpty                    
                    
                    defaultValue={"Manana"}
                    
                    {...register("turno")}
                    onChange={handleChange}
          
                    >
                    <MenuItem value={"Manana"}>Mañana</MenuItem>
                    <MenuItem value={"Tarde"}>Tarde</MenuItem>
                    <MenuItem value={"Noche"}>Noche</MenuItem>
                </Select>
        </div>
    </div>
  )
}

export default PersonaVoluntarioRegister
