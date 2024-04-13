import Main from "../components/Main.jsx";
import NavAdm from "../components/NavAdm.jsx";

import { useState } from "react";

import { Route, Routes, useNavigate } from 'react-router-dom';
import MenuItem from '../components/MenuItem.jsx'
import NotFound from "../../components/NotFound.jsx";


import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import RuleIcon from '@mui/icons-material/Rule';

import { Home } from "./routes/Home.jsx";
import P_Representante from "./routes/P_Representante.jsx";
import P_Colaborador from "./routes/P_Colaborador.jsx";

import DesplegarMenu from "../components/DesplegarMenu.jsx";

export default function Voluntario() {
    const [closeNav, setCloseNav] = useState(true);

    return (
        <>
            <NavAdm closeNav={closeNav} setCloseNav={setCloseNav}>
                {
                    // Aqui los item de  navs 
                }
                <MenuItem texto="Home" url="/" >
                    <HomeWorkRoundedIcon />
                </MenuItem>
                <DesplegarMenu texto="Postulacion" url="/">
                    < MenuItem texto="Respresentante" url="/p_representante" >
                        <SensorOccupiedIcon />
                    </MenuItem>
                    <MenuItem texto="Colaborador" url="/p_colaborador" >
                        <Diversity3Icon />
                    </MenuItem>
                </DesplegarMenu>


                <MenuItem texto="Postulaciones" url="/" >
                    <RuleIcon />
                </MenuItem>
            </NavAdm>
            <Main closeNav={closeNav} >
                <Routes>
                    {
                        // Rutas correspondientes a los navs 
                    }
                    <Route path='/' element={<Home />} />
                    <Route path='/p_representante' element={<P_Representante />} />
                    <Route path='/p_colaborador' element={<P_Colaborador />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </Main>
        </>
    )
}