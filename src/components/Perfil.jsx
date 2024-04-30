
import { useEffect, useState } from 'react';
import {useStore } from '../controllers/Auth.js'
import style from './Perfil.module.css'; 
import axios from 'axios'; 
export default function Perfil (){
    const user = useStore((state) => state.user);
    const id_user = useStore((state) => state.id_user);
    const rol = useStore((state) => state.rol);
    const token = useStore((state) => state.token);
    const [data, setData ]=useState(null); 

    function GetInfoPerfil() {
        axios.get('https://proyecto-281-production.up.railway.app/api/auth/mostrarDatos',{
            headers: {
              "x-token": token,
              "id_user": id_user
            }
          })
        .then(response => {
           console.log(response.data);
           setData(response.data); 
        })
        .catch(error => {
            console.log(error);            
        })
    }

    useEffect(()=>{
        GetInfoPerfil(); 
    },[]); 
    return (

        <div className={style.formulario}>
            <h3>Perfil</h3>
            <div className={style.lista_datos}>
            <div><p><span>User:</span> {user}</p></div>
            <div><p><span>Rol: </span>  {rol}</p></div>
            {data&&<MostraDatos datos={data}/>}
            </div>
        </div> 
        
    )
}

function MostraDatos({datos}) {
    

    return (<>
        <div ><p> <span>Nombre: </span>{datos.nombre}</p></div>
        <div><p> <span>Apellidos: </span> {datos.ap_paterno}  {datos.ap_materno}</p></div>

        <div><p> <span>Correo:  </span>{datos.correo} </p></div>
        <div><p> <span>Fecha: </span> {datos.fecha_nac} </p></div>
        <div><p> <span></span> <center >{datos.tipo}</center> </p></div>
    </>)
}