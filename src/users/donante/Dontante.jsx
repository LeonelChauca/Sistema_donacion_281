import Main from "../components/Main.jsx";
import NavAdm from "../components/NavAdm.jsx";
import { useState,createContext, useContext } from "react";

import { Route, Routes,useNavigate } from 'react-router-dom';
import MenuItem from '../components/MenuItem.jsx'
import NotFound from "../../components/NotFound.jsx";

import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import AddReactionIcon from '@mui/icons-material/AddReaction';

import { Home } from "./routes/Home.jsx";
import { RealizarDonacion } from "./routes/RealizarDonacion.jsx";
import SendIcon from '@mui/icons-material/Send';
import { ConfirmaDonacion } from "./routes/ConfirmaDonacion.jsx";
import { useStore } from "../../controllers/Auth.js"

//use context
export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [Productos, setProductos] = useState({id_user:useStore((state)=>state.id_user),dinero:[],alimento:[],producto :[]});
      const actualizarId = nuevoId => {
        setProductos(prevState => ({
          ...prevState,
          id_user: nuevoId
        }));
      };
      const actualizarFecha = nuevoFecha => {
        setProductos(prevState => ({
          ...prevState,
          fecha_d: nuevoFecha
        }));
      };
      const agregarDinero = nuevoDinero => {
        setProductos(prevState => ({
          ...prevState,
          dinero: [...prevState.dinero, nuevoDinero]
        }));
      };
    
      const agregarAlimento = nuevoAlimento => {
        setProductos(prevState => ({
          ...prevState,
          alimento: [...prevState.alimento, nuevoAlimento]
        }));
      };
    
      const agregarProducto = nuevoProducto => {
        setProductos(prevState => ({
          ...prevState,
          producto: [...prevState.producto, nuevoProducto]
        }));
      };
    return (
      <ProductContext.Provider value={{ Productos,actualizarId,actualizarFecha,agregarAlimento,agregarDinero,agregarProducto }}>
        {children}
      </ProductContext.Provider>
    );
  };



export default function Donante() {
    const [closeNav, setCloseNav] = useState(true);
    
    return (
        <>
            <ProductProvider>
                <NavAdm closeNav={closeNav} setCloseNav={setCloseNav}>
                {
                    // Aqui los item de  navs 
                    }

                    <MenuItem texto="Inicio" url="/" >
                        <HomeWorkRoundedIcon />
                    </MenuItem>
                    <MenuItem texto="Agrega donacion" url="/Agrega-donacion" >
                        <AddReactionIcon />
                    </MenuItem>
                    <MenuItem texto="Confirma donacion" url="/Confirma-donacion" >
                        <SendIcon />
                    </MenuItem>
                </NavAdm>
                <Main closeNav={closeNav} >
                {
                        // Rutas correspondientes a los navs 
                }
                <Routes>
                        <Route path='/' element={<Home/>} />
                        <Route path='/*' element={<NotFound />} />
                        <Route path='/Agrega-donacion' element={<RealizarDonacion />} />
                        <Route path='/Confirma-donacion' element={<ConfirmaDonacion />} />
                </Routes>
                </Main>
            </ProductProvider>
        </>
    )
}