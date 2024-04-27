import style from "../styles/containers/Home.module.css"
import persona from "../assets/img/home/persona.webp"
import alimento from "../assets/img/home/alimento.jpg"
import dinero from "../assets/img/home/dinero.png"
import producto from "../assets/img/home/producto.jpg"

import { createContext, useContext, useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";

// UI
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { InterseccionObjerver } from "../controllers/InterseccionObjerver"
const urlContext = createContext();


const Home = () => {

    const [change, setChange] = useState(null);

    if (change) {
        return <Navigate to={`/${change}`} />
    }

    // Configura las opciones para el Intersection Observer
    const opciones = {
        root: null, // el área de la ventana se utiliza como área de observación
        //rootMargin:'200px 1000px',
        threshold: [0, 1] // Observa solo la parte superior e inferior del elemento
    };

    // Función de callback que se ejecutará cuando cambie la intersección
    function callbackInterseccion(entries, observer) {
        // Itera sobre las entradas de intersección
        entries.forEach(entry => {
           const elementoObservado = entry.target;
            if (entry.isIntersecting ) {
                 elementoObservado.classList.add('animate__animated','animate__zoomIn')
           //     console.log('El elemento', elementoObservado, 'está en la vista');                
            } else {
                elementoObservado.classList.remove('animate__animated','animate__zoomIn')
             //   console.log('El elemento', elementoObservado, 'No está en la vista');                
            }
        });
    }

    // Crea una nueva instancia de Intersection Observer con la función de callback y las opciones
    const observador =   new IntersectionObserver(callbackInterseccion, opciones);

    useEffect(() => {
        //observador.setClases(['animate__animated','animate__zoomIn'])
        //observador.callbackInterseccion(); 

        const elementoInterseccion=document.querySelector("."+style.texto); 
        observador.observe(elementoInterseccion);
    }, []); 


    return (
        <urlContext.Provider value={{ setChange }}>
            <main>
                <Portada />
                <section className={style.optimizacion + " animate__animated animate__jackInTheBox"}>
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
                <Dinero />
            </main>
        </urlContext.Provider>

    )
}

function Portada() {
    const { setChange } = useContext(urlContext);
    return <section className={style.portada}>
        <div className={style.texto }>
            <h1 style={{ color: "var(--color-secundario)" }}>
                Simplifica tus donaciones de alimentos y productos
            </h1>
            <Divider style={{ border: "1px solid black" }}></Divider>
            <br></br>
            <p>
                Nuestra plataforma te permite rastrear, coordinar y generar informes fácilmente
            </p>
            <br></br>
            <BtnAction texto="Solicitar registro" url="registro" />
        </div>
        <figure className={style.figure + "  animate__animated animate__bounceInRight"}>
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
            <BtnAction texto="Contactanos" url="contacto" />

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
            <BtnAction texto="Contactanos" url="contacto" />
        </div>

    </section>
}

function BtnAction({ texto = "Hola", url = "#", variant = "outlined" }) {
    const { setChange } = useContext(urlContext);
    return (
        <Button style={{ textTransform: "none", fontSize: "1.1rem" }} variant={variant} onClick={() => { setChange(() => url) }}>
            {texto}
        </Button>
    )
}

export default Home; 