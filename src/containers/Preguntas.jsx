import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Acordeon from '../components/Acordeon';
import s from '../styles/components/Preguntas.module.css';
const Preguntas =()=>{
    return (
     <>
        <div className={s.containerP}>
            <h2>Preguntas Frecuentes</h2>
            <hr className={s.hr} />
            <Acordeon titulo={"¿Cómo puedo realizar una donación?"} respuesta={"Puedes realizar una donación a través de nuestro sitio web utilizando nuestro formulario de donación seguro. También aceptamos donaciones por correo o en persona en nuestras oficinas."}/>
            <Acordeon titulo={"¿Qué tipos de donaciones aceptan?"} respuesta={"Aceptamos donaciones de dinero, productos y dinero"}/>
            <Acordeon titulo={"¿Cómo puedo ser voluntario?"} respuesta={"Puedes ser voluntario completando nuestro formulario de voluntariado en línea."}/>
            <Acordeon titulo={"¿Qué tipo de ayuda necesitan?"} respuesta={"Necesitamos ayuda en una variedad de áreas, Pero mas se necesitan en envio y recepcion de donaciones"}/>
        </div>
     </>
    )
 }
 
 export default Preguntas ; 