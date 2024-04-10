import React, { useState } from 'react'
import {TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControlLabel, FormLabel, FormHelperText } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import style from '../../styles/realizarDonacionAlimento.module.css'
export const RegistrarDonacionDinero = ({tabla,setTabla}) => {
  const [cambio, setCambio] = useState('');

  const handleChange = (event) => {
    setCambio(event.target.value);
  };
  return (
    <div className={style.container}>
        <div className={style.containerMain}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Fecha de la donacion"
                slotProps={{
                  textField: {
                    helperText: 'fecha que se realizara la donacion*',
                  },
                }}
            />
          </LocalizationProvider>
          <TextField label="Monto" variant="outlined" type="number"/>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Tipo de cambio</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cambio}
                label="tipo-cambio"
                onChange={handleChange}
              >
                <MenuItem value={"bolivianos"}>Bs. Bolivianos</MenuItem>
                <MenuItem value={"dolares"}>$ Dolares</MenuItem>
              </Select>
          </FormControl>          
        </div>
        <Button variant="contained">Agregar donacion</Button>
    </div>
  )
}
