import Main from "../components/Main.jsx";
import NavAdm from "../components/NavAdm.jsx";

import { useState,createContext,useContext } from "react";

import { Route, Routes, useNavigate } from 'react-router-dom';
import MenuItem from '../components/MenuItem.jsx'
import NotFound from "../../components/NotFound.jsx";


import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';


import { Home } from "./routes/Home.jsx";


export default function Receptor() {
    const [closeNav, setCloseNav] = useState(true);
    const [open, setOpen] = useState(false);
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
                <Routes>
                    {
                        // Rutas correspondientes a los navs 
                    }
                    <Route path='/' element={<Home />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </Main>
        </>
    )
}