import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import s from "../styles/components/Contacto.module.css";
import { useForm } from "react-hook-form";
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
const FormuilarioContacto = () => {

    const valores=[
        { value: 'Voluntario', label: 'Voluntario' },
        { value: 'Donante', label: 'Donante'},
        { value: 'Otro', label: 'Otro'}
    ]
    const { register, handleSubmit,formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)

  return (
    <div className={s.formcontainer}>
                <Box
                    component="form"
                    className={s.boxT}
                    noValidate
                    autoComplete="off"
                    onSubmit={handleSubmit(onSubmit)}
                    >
                    <TextField id="standard-basic"  {...register("nombre",{required:true})} label="Tu nombre" variant="standard"  />
                    {errors.nombre && <Alert variant="outlined" severity="success">
 
</Alert>}
                    <TextField id="standard-basic" {...register("email")} label="Email" variant="standard"  />
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Deseas mas informacion sobre"
                        defaultValue="Otro"
                        helperText="Selecciona una opcion*"
                        {...register("tipo_ayuda")}
                        variant="standard" 
                        >
                        {valores.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                            {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="standard-multiline-static"
                        label="Comentarios*"
                        multiline
                        rows={5}
                        defaultValue=""
                        variant="standard"
                        {...register("Comentarios",{required:true})}
                    />
                    <Button variant="contained" disableElevation type="submit">
                        Enviar
                    </Button>
                </Box>
        </div>
  )
}

export default FormuilarioContacto
