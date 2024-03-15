import React from 'react'
import styles from '../styles/components/Footer.module.css';
//componente Footer
const Footer = () => {
  return (
    <div className={styles.Mainfooter}>
        <div className={styles.secondfooter}>
            <h1>Sistema de Donación</h1>
            <div className={styles.container}>
                <ul>
                    <li><a href="">Sobre Nosotros</a></li>
                    <li><a href="">Preguntas</a></li>
                    <li><a href="">Contacto</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Home</a></li>
                </ul>
                <ul>
                    <li><a href="">hola</a></li>
                </ul>
                <ul>
                    <li><a href="">hola</a></li>
                </ul>
            </div>
            
        </div>
    </div>
  )
}

export default Footer
