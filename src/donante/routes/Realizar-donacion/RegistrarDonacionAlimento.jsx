import React from 'react'
import {TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { FormControlLabel } from '@mui/material';
import Button from '@mui/material/Button';
import style from '../../styles/realizarDonacionAlimento.module.css'

export const RegistrarDonacionAlimento = () => {
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
          <TextField label="Nombre del Alimento" variant="outlined" type="text"/>
          <TextField label="Cantidad" variant="outlined" type="number"/>
          <TextField label="Medida Unitaria" variant="outlined" type="text"/>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
                label="Caducidad"
            />
          </LocalizationProvider>
          
        </div>
        <Button variant="contained">Agregar donacion</Button>
    </div>
    
  )
}
