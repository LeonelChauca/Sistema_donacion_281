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
export const RegistrarDonacionProducto = () => {
  const [tipo, setTipo] = useState('');

  const handleChange = (event) => {
    setTipo(event.target.value);
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
          <TextField label="Nombre de producto" variant="outlined" type="text"/>
          <FormControl>
            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={tipo}
                label="tipo-cambio"
                onChange={handleChange}
              >
                <MenuItem value={"higiene"}>Higiene</MenuItem>
              </Select>
          </FormControl>
          <TextField label="Cantidad" variant="outlined" type="number"/>
          <TextField label="Medida Unitaria" variant="outlined" type="text"/>

          
        </div>
        <Button variant="contained">Agregar donacion</Button>
    </div>
  )
}
