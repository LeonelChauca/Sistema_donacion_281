import React, { useEffect } from 'react'
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';



export const Tipoinp = ({register,tipo,setTipo,valorTipo}) => {
    const handleChange = (event) => {
        setTipo(event.target.value);
    };    
    const tipoOptions = Object.keys(valorTipo).map((clave) => (
        <MenuItem key={clave} value={clave}>
          {clave}
        </MenuItem>
      ));
    
  return (
    <FormControl>
        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
            <Select
            {...register("tipo_p")}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={tipo}
            label="tipo-cambio"
            onChange={handleChange}
            >
            {
                tipoOptions
            }
        </Select>
    </FormControl>
  )
}
