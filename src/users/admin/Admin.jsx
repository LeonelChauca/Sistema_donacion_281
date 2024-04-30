import Main from "../components/Main.jsx";
import NavAdm from "../components/NavAdm";
import { useState } from "react";

import MenuItem from "../components/MenuItem.jsx"
import { useStore } from "../../controllers/Auth.js"
import PeopleIcon from '@mui/icons-material/People';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import StorefrontIcon from '@mui/icons-material/Storefront';

import NotFound from "../../components/NotFound.jsx";
import Home from "./routes/Home.jsx";
import Usuarios from "./routes/Usuarios.jsx";
import Productos from "./routes/Productos.jsx";
import { UserPendiente } from "./routes/UserPendiente.jsx";

import { Route, Routes,useNavigate } from 'react-router-dom';

import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ViewListRoundedIcon from '@mui/icons-material/ViewListRounded';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


import { ResponsableDonacion } from "./routes/Responsable-donacion/ResponsableDonacion.jsx";
import { ResponsableEntrega } from "./routes/Responsable-entrega/ResponsableEntrega.jsx";
import { SresponsableEntrega } from "./routes/Responsable-entrega/SresponsableEntrega.jsx";

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
                    <AssignmentIndIcon />
                </MenuItem>
                <MenuItem texto="Responsable Entrega" url="/Responsable-entrega" >
                    <ViewListRoundedIcon />
                </MenuItem>
                <MenuItem texto="Productos" url="/productos" >
                    <StorefrontIcon />
                </MenuItem>
                <MenuItem texto="Usuarios pendientes " url="/usuarios-pendiente" >
                    <PeopleAltIcon />
                </MenuItem>
                <MenuItem texto="Solicitud receptor " url="/Solicitud-entrega" >
                    <ViewListRoundedIcon />
                </MenuItem>
            </NavAdm>
            <Main closeNav={closeNav} >
                <Routes>
                    <Route path="/" element={<Home />} />
                    {rol == "administrador" && <Route path="/usuarios" element={<Usuarios />} />}
                    <Route path="/productos" element={<Productos />} />
                    <Route path='/Usuarios-pendiente' element={<UserPendiente />} />
                    <Route path='/Responsable-donacion' element={<ResponsableDonacion />} />
                    <Route path='/Solicitud-entrega' element={<ResponsableEntrega />} />
                    <Route path='/Responsable-entrega' element={<SresponsableEntrega />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
            </Main>
        </>
    )
}
