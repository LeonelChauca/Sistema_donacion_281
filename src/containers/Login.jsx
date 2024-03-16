import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useState, MouseEvent } from 'react';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';


import VisibilityOff from '@mui/icons-material/VisibilityOff';
const Login =()=>{
    const [showPassword, setShowPassword] = useState(false);
    
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    return (
     <>
        <div>
            <h2>Iniciar Sesion</h2>
            <hr />
            <form action="">
                <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                <FormControl sx={{ m: 0, width: '25ch' }} variant="outlined">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                            >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
            </form>
        </div>
        
     </>
    )
 }
 
 export default Login ; 