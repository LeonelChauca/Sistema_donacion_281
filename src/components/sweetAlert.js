import Swal from 'sweetalert2'

export const AlertaOkRegistro=()=>{
    Swal.fire({
        title: "Usuario en revision",
        text: "Puedes esperar el correo de activacion de cuenta",
        icon: "success"
      });
}
export const AlertaErrorRegistro=(mensaje="Error")=>{
    Swal.fire({
        title: "Error al enviar los datos",
        text: mensaje,
        icon: "error"
      });
}