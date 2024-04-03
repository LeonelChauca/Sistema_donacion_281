import NotFound from "../components/NotFound.jsx";
import Home from "./routes/Home.jsx";
import style from "./css/Main.module.css"
import { Route, Routes,useNavigate } from 'react-router-dom';
import Usuarios from "./routes/Usuarios.jsx";
import Productos from "./routes/Productos.jsx";
import { UserPendiente } from "./routes/UserPendiente.jsx";
import { useEffect } from "react";
import { useStore } from "../controllers/Auth.js"

export default function Main({closeNav}){
    const token=useStore((state)=>state.token);
    const rol=useStore((state)=>state.rol);
    const Navigate=useNavigate();
    useEffect(() => {
      if(rol=="administrador"){
        Navigate("/");
      }
    }, [])
    
    return (
        <main className={style.main + (closeNav?" "+style.close:"")}>
               <Routes>
                <Route path="/" element={<Home />} />     
                {rol=="administrador"&&<Route path="/usuarios" element={<Usuarios />} />  }
                
                <Route path="/productos" element={<Productos />} /> 
                <Route path='/Usuarios-pendiente' element={<UserPendiente />} /> 
                <Route path='/*' element={<NotFound />} />
              </Routes>
        </main>
    )
}