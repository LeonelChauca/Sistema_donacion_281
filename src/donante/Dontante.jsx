import Main from "../admin/Main.jsx";
import NavAdm from "../admin/NavAdm.jsx";
import { useState } from "react";

import { Route, Routes,useNavigate } from 'react-router-dom';
import MenuItem from '../admin/MenuItem.jsx'
import NotFound from "../components/NotFound.jsx";

import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';

import { Home } from "./routes/Home.jsx";

export default function Donante() {
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
            </NavAdm>
            <Main closeNav={closeNav} >
            {
                    // Rutas correspondientes a los navs 
             }
            <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </Main>
        </>
    )
}