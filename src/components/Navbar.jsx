

import { Link } from 'react-router-dom';
import icon from "../assets/img/icon/donar.png"

import style from "../styles/components/Navbar.module.css"
import Button from '@mui/material/Button';

// Controllers

// Controller 
import {useStore} from "../controllers/Auth.js"
import MenuCuenta from '../users/components/MenuCuenta.jsx';
import { useEffect, useState } from 'react';

// Componente de Navbar
const Navbar = () => {
    const logged = useStore((state)=>state.logged)
    const rol = useStore((state) => state.rol)
  
    const login=useStore((state)=>state.login); 
    function scrollerBlock(e) {
        
            e.preventDefault();
        
    }

    function animacion(){
        
            var elemento = document.querySelector("."+style.navbar); 
            var rect = elemento.getBoundingClientRect();
            var scrollTop = window.scrollY || window.pageYOffset;
            if (scrollTop>=100) {
                elemento.classList.add(style.animar); 
                
                
            }else {
                elemento.classList.remove(style.animar); 
                
            }    
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
            document.removeEventListener('wheel',scrollerBlock, { passive: false });            
            document.removeEventListener('touchmove',scrollerBlock, { passive: false });
        }
        
    }

    useEffect(()=>{
        window.addEventListener('scroll', animacion) ; 
        
        window.addEventListener("resize", togleNav);

        return ()=>{
            window.removeEventListener('scroll', animacion)
            window.removeEventListener("resize", togleNav);

        }
    },[])
    return (<>
    
    <div className={style.proteger}  onClick={togleNav}>
    </div>
    <div className={style.height_nav}>
        
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
                    (rol=="voluntario")&&<Voluntario togleNav={togleNav}/>
                    }
                    {
                     (rol=="donante_natural" || rol=="encargado_donante" || rol=="donante")&&<Donante togleNav={togleNav}/>                     
                    }
                    {
                          (rol=="encargado_org_ben" || rol=="encargado_receptor" || rol=="receptor_natural")&&<Receptor togleNav={togleNav}/>                     
                    }
                    <li onClick={togleNav}><Link to="/">Inicio</Link></li>
                    {(logged)?
                        <MenuCuenta ></MenuCuenta>          
                        :<li onClick={togleNav}>
                         <Link to="/login" >
                           <Button variant="contained" style={{textTransform:"none",padding:"2px 8px"}}>Login</Button>
                         </Link>
                         </li> }
                    
                </div>
            </ul>
        </nav>        
        </>
    );
};
function Receptor({togleNav}) {
    return (
        <>
        <li className={style.menuLista}> Receptor 
           <ul>
                <li onClick={togleNav}><Link to="/Solicitar-donacion">Solicitar Donacion </Link></li>
                <li onClick={togleNav}><Link to="/Confirma-solicitud-donacion">Confirmar Donacion </Link></li>
           </ul>    
        </li>   
        <li onClick={togleNav}><Link to="/donaciones_disponibles">Ver Donaciones </Link>
        </li>
     </>
    )
}

function Voluntario({togleNav}) {
    
    return (
        <>
           <li className={style.menuLista}> Postular
              <ul>
                <li onClick={togleNav}><Link to="/p_representante">Responsable</Link></li>
                <li onClick={togleNav}><Link to="/p_colaborador">Colaborador</Link></li>
                <li onClick={togleNav}><Link to="/p_entregar">Entregar</Link></li>
              </ul>           
           </li>
           <li className={style.menuLista}> Ver postulaciones
             <ul>
              <li onClick={togleNav}><Link to="/ver_postulaciones">Responsable</Link></li>
              <li onClick={togleNav}><Link to="/ver_postulaciones_colab">Colaboracion</Link></li>
             </ul>
           </li>
        </>
    ); 

}
function Donante({togleNav}) {
    return (
        <>
        <li className={style.menuLista}> Donacion
           <ul>
           <li onClick={togleNav}><Link to="/Agrega-donacion">Agregar</Link></li>
             <li onClick={togleNav}><Link to="/Confirma-donacion">Confirmar</Link></li>
           </ul>
        
        </li>        
     </>
    )
}





export default Navbar;
