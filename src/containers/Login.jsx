import style from '../styles/containers/Login.module.css';
import FormularioLogin from '../components/FormularioLogin';
const Login =()=>{
    
    return (
        <div className={style.containerL}>
            <h2>Iniciar Sesión</h2>
            <p>Realizado prueba</p>
            <hr />
            <FormularioLogin />
        </div>
    )
 }
 
 export default Login ; 