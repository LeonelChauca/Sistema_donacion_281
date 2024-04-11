import Main from "./Main.jsx";
import NavAdm from "./NavAdm";
import { useState } from "react";

import MenuItem from "./MenuItem.jsx"
import { useStore } from "../controllers/Auth.js"

import NotFound from "../components/NotFound.jsx";
import Home from "./routes/Home.jsx";
import Usuarios from "./routes/Usuarios.jsx";
import Productos from "./routes/Productos.jsx";
import { UserPendiente } from "./routes/UserPendiente.jsx";

import { Route, Routes,useNavigate } from 'react-router-dom';

import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import { ResponsableDonacion } from "./routes/Responsable-donacion/ResponsableDonacion.jsx";

export default function Admin() {
    const [closeNav, setCloseNav] = useState(true);
    const rol = useStore((state) => state.rol);
    return (
        <>
            <NavAdm closeNav={closeNav} setCloseNav={setCloseNav}>
                <MenuItem texto="Home" url="/" >
                    <HomeWorkRoundedIcon />
                </MenuItem>
                {rol == "administrador" && <MenuItem texto="Usuarios" url="/usuarios" >
                    <PeopleAltIcon />
                </MenuItem>}

                <MenuItem texto="Responsable donacion" url="/Responsable-donacion" >
                    <ViewListRoundedIcon />
                </MenuItem>
                <MenuItem texto="Dinero" url="/productos" >
                    <ViewListRoundedIcon />
                </MenuItem>
                <MenuItem texto="Productos" url="/productos" >
                    <ViewListRoundedIcon />
                </MenuItem>
                <MenuItem texto="Productos" url="/productos" >
                    <ViewListRoundedIcon />
                </MenuItem>
                <MenuItem texto="Productos" url="/productos" >
                    <ViewListRoundedIcon />
                </MenuItem>
                <MenuItem texto="Usuarios pendientes " url="/usuarios-pendiente" >
                    <PeopleAltIcon />
                </MenuItem>
            </NavAdm>
            <Main closeNav={closeNav} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    {rol == "administrador" && <Route path="/usuarios" element={<Usuarios />} />}

                    <Route path="/productos" element={<Productos />} />
                    <Route path='/Usuarios-pendiente' element={<UserPendiente />} />
                    <Route path='/Responsable-donacion' element={<ResponsableDonacion />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </Main>
        </>
    )
}
