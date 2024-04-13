
import style from "./css/Main.module.css"
import { Route, Routes,useNavigate } from 'react-router-dom';

import { useEffect } from "react";
import { useStore } from "../../controllers/Auth.js"

export default function Main({children,closeNav}){
    const token=useStore((state)=>state.token);
    const rol=useStore((state)=>state.rol);
    const Navigate=useNavigate();
    return (
        <main className={style.main + (closeNav?" "+style.close:"")}>
               {
                children
               }
        </main>
    )
}