import Swal from 'sweetalert2'
//import { useStore } from "../../controllers/Auth.js"
import Axios from 'axios';

export const AlertaOkEncargado=()=>{
    Swal.fire({
        title: " Envio correcto",
        text: "Se selecciono como representante voluntario",
        icon: "success"
      });
}
export const AlertaErrorEncargado=(mensaje="Error")=>{
    Swal.fire({
        title: "Error al enviar los datos",
        text: mensaje,
        icon: "error"
      });
}

export const ConfirmacionOkEncargado=(title="Esta seguro de Seleccionar como Encargado voluntario?", text="No podras revertir esto!",Accion,setAct,Act)=>{
  Swal.fire({
    title,
    text,
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Confirmar"
  }).then((result) => {
    if (result.isConfirmed) {
        
        AlertaOkEncargado();
        setAct(!Act);
        Accion();
    }
  });
}