import React from 'react'
import styles from '../styles/components/Footer.module.css';
import { Link } from 'react-router-dom';
 import fondo from '../assets/footer.png'
 import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
 import WhatsAppIcon from '@mui/icons-material/WhatsApp';
//componente Footer
const Footer = () => {
  return (
    <>
    <div className={styles.Mainfooter}>
    <div className={styles.author}> 
      <span><pre data-dev="let Devs = new Dev( [Leo , Cimar , Roman , Omar])" data-dev-res="{'Devs':[Leo,Cimar,Roman,Omar]}">  </pre> </span>
    </div>      
        <div className={styles.secondfooter}>
          <div className={styles.img}>  
            <img src="/icon.png" alt="Icono " /> 
            <center><p> Dona Facil   </p></center>
          </div>
            <h1>Sistema de Donación</h1>
            <div className={styles.container}>                
                <ul>
                    <li><Link to="/about">Sobre Nosotros</Link></li>
                    <li><Link to="/preguntas">Preguntas</Link></li>
                    <li><Link to="/">Inicio</Link></li>
                </ul>
                <ul>
                 <li className={styles.text}>
                 Conectando corazones generosos con quienes más lo necesitan. Donar, recolectar, solicitar y entregar donaciones con amor y compromiso
                 </li>
                </ul>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Footer
