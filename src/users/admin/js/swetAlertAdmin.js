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

export const acceptSol=()=>{
  Swal.fire({
    title:'Solicitud aceptada',
    text:'la solicitud fue aceptada exitosamente',
    icon:'success',
  })
}
export const errSol=(error)=>{
  Swal.fire({
    title:'Error !',
    text:error,
    icon:'error',
  })
}

export const verProductoSol = (data) => {
  const { producto, dinero, alimento } = data;
  let contenido = '<h2>Productos Solicitados:</h2>';
  
  if (producto && producto.length > 0) {
    contenido += '<h3>Productos:</h3>';
    producto.forEach((item) => {
      contenido += `<p>${item.nombre}: ${item.cantidad}</p>`;
    });
    contenido += "<hr/>"
  }

  if (dinero && dinero.length > 0) {
    contenido += '<h3>Dinero:</h3>';
    dinero.forEach((item) => {
      contenido += `<p>${item.cantidad} ${item.cambio}</p>`;
    });
    contenido += "<hr/>"
  }

  if (alimento && alimento.length > 0) {
    contenido += '<h3>Alimento:</h3>';
    alimento.forEach((item) => {
      contenido += `<p>${item.cantidad} ${item.nombre}</p>`;
    });
  }

  Swal.fire({
    title: 'Productos que se solicitaron',
    html: contenido,
    confirmButtonText: 'Cerrar'
  });
};