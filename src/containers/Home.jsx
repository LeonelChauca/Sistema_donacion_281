import style from "../styles/containers/Home.module.css"
import persona from "../assets/img/home/persona.webp"
import alimento from "../assets/img/home/alimento.jpg"
import dinero from "../assets/img/home/dinero.png"
import producto from "../assets/img/home/producto.jpg"

import { createContext, useContext, useState } from 'react';
import {Navigate} from "react-router-dom";

// UI
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
const urlContext = createContext();

const Home = () => {

    const [change, setChange] = useState(null); 

    if (change){
        return <Navigate to={`/${change}`} />
    }
    return (
        <urlContext.Provider value={{setChange}}>
            <main>
            <Portada />
            <section className={style.optimizacion}>
                <div className={style.card}>
                    <br></br>
                    <h1>Optimiza tus donaciones de alimentos</h1>
                    <br></br>
                    <p>
                        Coordinación eficiente y generación de informes con un solo clic
                    </p>
                    <br></br>
                    <p>
                        Simplifica el proceso de donación y maximiza tu impacto social.
                    </p>
                </div>
            </section>
            <Alimentos />
            <Producto />
            <Dinero  />
        </main>
        </urlContext.Provider>
        
    )
}

function Portada() {
    const { setChange } = useContext(urlContext);
    return <section className={style.portada}>
        <div className={style.texto}>
            <h1 style={{ color: "var(--color-secundario)" }}>
                Simplifica tus donaciones de alimentos y productos
            </h1>
            <Divider style={{ border: "1px solid black" }}></Divider>
            <br></br>
            <p>
                Nuestra plataforma te permite rastrear, coordinar y generar informes fácilmente
            </p>
            <br></br>
            <BtnAction texto="Solicitar registro" url="registro"/>                
        </div>
        <figure className={style.figure}>
            <img src={persona} alt="donacion" />
        </figure>
    </section>
}

function Alimentos() {
    const { setChange } = useContext(urlContext);
    return <section className={style.portada}>
        <figure className={style.figure}>
            <img src={alimento} alt="donacion" />
        </figure>
        <div className={style.texto}>
            <h1>Dona alimentos de forma inteligente</h1>

            <p>
                Gestiona, rastrea y reporta tus donaciones con facilidad
            </p>
            <p>
                Simplificamos la coordinación de donaciones para maximizar tu impacto social
            </p>
        </div>

    </section>
}

function Producto() {
    return <section className={style.portada}>
        <div className={style.texto}>
            <h1>Cada producto que donas</h1>

            <p>es una muestra de generosidad y solidaridad. Juntos, podemos brindar esperanza y apoyo a quienes lo necesitan.
            </p>

            <p>Desde ropa hasta artículos de higiene personal, cada donación cuenta.
            </p>
            <p>
            <i>
            Haz tu parte y ayuda a mejorar la calidad de vida de quienes están en situación de vulnerabilidad
            </i>
            </p>
            <br></br>
            <BtnAction texto="Contactanos" url="contacto"/>
            
        </div>
        <figure className={style.figure}>
            <img src={producto} alt="donacion" />
        </figure>
    </section>
    }

function Dinero() {
    
    return <section className={style.portada}>
        <figure className={style.figure}>
            <img src={dinero} alt="donacion" />
        </figure>
        <div className={style.texto}>
            <h1>Con tu donación financiera</h1>
            <p> podemos llegar aún más lejos y brindar ayuda donde más se necesita. <i>¡Cada contribución cuenta</i>
            </p>
            <br></br>
            <BtnAction texto="Contactanos" url="contacto"/>            
        </div>

    </section>
}

function BtnAction({texto="Hola", url="#",variant="outlined"}){
    const { setChange } = useContext(urlContext);
    return (
    <Button  style={{textTransform:"none", fontSize:"1.1rem"}} variant={variant} onClick={()=>{setChange(()=>url)}}>                
                {texto}                
    </Button>
    )
}

export default Home; 