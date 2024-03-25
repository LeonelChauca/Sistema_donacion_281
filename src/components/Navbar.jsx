

import { Link } from 'react-router-dom';
import icon from "../assets/img/icon/donar.png"

import style from "../styles/components/Navbar.module.css"
import Button from '@mui/material/Button';

<<<<<<< HEAD
// Controllers
=======
// Controller 
>>>>>>> parent of f385083 (Intentando solucionar)
import {useStore} from "../controllers/Auth.js"

// Componente de Navbar
const Navbar = () => {
<<<<<<< HEAD
    const logged = useStore((state)=>state.logged)
=======
    const login=useStore((state)=>state.login); 
>>>>>>> parent of f385083 (Intentando solucionar)
    function scrollerBlock(e) {
        
            e.preventDefault();
        
    }
    function togleNav() {
        if(window.innerWidth < 850){
            document.querySelector("."+style.baras).classList.toggle(style.animacionBar); 
            document.querySelector("."+style.item).classList.toggle(style.animacionItems);
            document.querySelector("."+style.proteger).classList.toggle(style.protegerTogle);
            
            if(document.querySelector("."+style.proteger).classList.contains(style.protegerTogle)){
                document.addEventListener('wheel',scrollerBlock, { passive: false });            
                document.addEventListener('touchmove',scrollerBlock, { passive: false });
            }else {
                document.removeEventListener('wheel',scrollerBlock, { passive: false });            
                document.removeEventListener('touchmove',scrollerBlock, { passive: false });
            }        
        }else{
            document.querySelector("."+style.proteger).classList.remove(style.protegerTogle)
        }
        
    }
    return (<>
    
    <div className={style.proteger}  onClick={togleNav}>

    </div>
        <nav  className={style.navbar}  >
            <div className={style.icono}>
                <picture>
                <img src="/icon.png" alt="Icono"></img>
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
                    <li onClick={togleNav}><Link to="/about">Sobre Nosotros</Link></li>
                    <li onClick={togleNav}><Link to="/preguntas">Preguntas</Link></li>
                    <li onClick={togleNav}><Link to="/contacto">Contacto</Link></li>
                    {
<<<<<<< HEAD
                        logged&&<li onClick={togleNav}><Link to="/productos">Productos</Link></li>
=======
                        login&&
                        <li onClick={togleNav}><Link to="/productos">Productos</Link></li>
>>>>>>> parent of f385083 (Intentando solucionar)
                    }
                    <li onClick={togleNav}><Link to="/">Inicio</Link></li>
                    <li onClick={togleNav}>
                    <Link to="/login">
                    <Button variant="contained" style={{textTransform:"none",padding:"2px 8px"}}>login</Button>
                    </Link></li>                
                </div>
            </ul>
        </nav>        
        </>
    );
};

export default Navbar;
