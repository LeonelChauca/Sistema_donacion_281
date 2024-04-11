import Main from "../admin/Main.jsx";
import NavAdm from "../admin/NavAdm.jsx";
import { useState } from "react";

import { Route, Routes, useNavigate } from 'react-router-dom';
import MenuItem from '../admin/MenuItem.jsx'
import NotFound from "../components/NotFound.jsx";


import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';

import { Home } from "./routes/Home.jsx";
import P_Representante  from "./routes/P_Representante.jsx";
import P_Colaborador from "./routes/P_Colaborador.jsx";




import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';

import PostAddIcon from '@mui/icons-material/PostAdd';
import { BorderLeft } from "@mui/icons-material";

export default function Voluntario() {
    const [closeNav, setCloseNav] = useState(true);
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <NavAdm closeNav={closeNav} setCloseNav={setCloseNav}>
                {
                    // Aqui los item de  navs 
                }
                <MenuItem texto="Home" url="/" >
                    <HomeWorkRoundedIcon />
                </MenuItem>

                <MenuItem texto="Postulacion" url="/" handleClick={handleClick} open={open}>
                    <PostAddIcon />
                </MenuItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                            <MenuItem texto="Respresentante" url="/p_representante"  style={{BorderLeft:"1px solid red"}}>
                                <SensorOccupiedIcon />
                            </MenuItem>
                            <MenuItem texto="Colaborador" url="/p_colaborador" >
                                <Diversity3Icon />
                            </MenuItem>                        
                    </List>
                </Collapse>
            </NavAdm>
            <Main closeNav={closeNav} >
                <Routes>
                    {
                        // Rutas correspondientes a los navs 
                    }
                    <Route path='/' element={<Home />} />
                    <Route path='/p_representante' element={<P_Representante/>} />
                    <Route path='/p_colaborador' element={<P_Colaborador />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </Main>
        </>
    )
}