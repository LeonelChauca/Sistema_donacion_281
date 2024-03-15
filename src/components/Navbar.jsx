

import { Link } from 'react-router-dom';
import icon from "../assets/img/icon/donar.png"
import style from "../styles/components/Navbar.module.css"
// Componente de Navbar
const Navbar = () => {


    function togleNav() {
        document.querySelector("."+style.baras).classList.toggle(style.animacionBar); 
        document.querySelector("."+style.item).classList.toggle(style.animacionItems);
        document.querySelector("."+style.proteger).classList.toggle(style.protegerTogle);
        
    }
    return (<>
    
    <div className={style.proteger}  onClick={togleNav}>

    </div>
        <nav  className={style.navbar}  >
            <div className={style.icono}>
                <picture>
                <img src={icon} alt="Icono"></img>
                </picture>
                <h3>
                Sis Donación
                </h3>
            </div>        
            <ul className={style.items}>
                <span className={style.baras} onClick={togleNav}>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                    <div className={style.bar}></div>
                </span>
                <div className={style.item}> 
                    <li onClick={togleNav}><Link to="/">Sobre Nosotros</Link></li>
                    <li onClick={togleNav}><Link to="/">Preguntas</Link></li>
                    <li onClick={togleNav}><Link to="/contacto">Contacto</Link></li>
                    <li onClick={togleNav}><Link to="/">Productos</Link></li>
                    <li onClick={togleNav}><Link to="/">Home</Link></li>
                    <li onClick={togleNav}><Link to="/login">Login</Link></li>                
                </div>
            </ul>
        </nav>
        
        </>
    );
};

export default Navbar;
