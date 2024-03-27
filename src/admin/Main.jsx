import NotFound from "../components/NotFound.jsx";
import Home from "./routes/Home.jsx";
import style from "./css/Main.module.css"
import { Route, Routes } from 'react-router-dom';
import Usuarios from "./routes/Usuarios.jsx";
import Productos from "./routes/Productos.jsx";
import { UserPendiente } from "./routes/UserPendiente.jsx";
export default function Main({closeNav}){
    return (
        <main className={style.main + (closeNav?" "+style.close:"")}>
               <Routes>
                <Route path="/" element={<Home />} />               
                <Route path="/usuarios" element={<Usuarios />} />  
                <Route path="/productos" element={<Productos />} /> 
                <Route path='/Usuarios-pendiente' element={<UserPendiente />} /> 
                <Route path='/*' element={<NotFound />} />
              </Routes>
        </main>
    )
}