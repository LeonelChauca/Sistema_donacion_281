import style from '../styles/containers/Login.module.css';
import FormularioLogin from '../components/FormularioLogin';
import { useEffect } from 'react';
import setScrollTop from '../controllers/setPostScroll';
const Login =()=>{
    
    useEffect(()=>{
        setScrollTop(0);             
    },[])
    return (        
        <div className={style.containerL}>
            <h2>Iniciar Sesión</h2>
            <hr />
            <FormularioLogin />
        </div>
    )
 }
 
 export default Login ; 