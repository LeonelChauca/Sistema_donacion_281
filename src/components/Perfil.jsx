
import { useEffect, useState } from 'react';
import {useStore } from '../controllers/Auth.js'
import style from './Perfil.module.css'; 
import axios from 'axios'; 
export default function Perfil (){
    const user = useStore((state) => state.user);
    const rol = useStore((state) => state.rol);
    const [data, setData ]=useState([]); 

    function GetInfoPerfil() {
        axios.get('https://proyecto-281-production.up.railway.app/api/auth/new',{
            Headers:{
                user
            }
        })
        .then(response => {
           console.log(response); 
        })
        .catch(error => {
            console.log(error);            
        })
    }

    useEffect(()=>{
       // GetInfoPerfil(); 
    },[]); 
    return (

        <div className={style.formulario}>
            <h3>Perfil</h3>
            <p>User: {user}</p>
            <p>Rol:  {rol}</p>
        </div> 
        
    )
}