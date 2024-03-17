import FormuilarioContacto from "../components/FormuilarioContacto";
import s from "../styles/components/Contacto.module.css";
const Contact =()=>{
    
   return (
    <div className={s.containerC}>
        <h2>
            Ponte en contacto con nosotros ! 
        </h2>
        <p>Si es que tienes alguna duda puedes comunicarte con nosotros </p>
        <FormuilarioContacto/>
    </div>
   )
}

export default Contact ; 