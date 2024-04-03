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

export const ConfirmacionEliminarUser=(title="Are you sure?", text="You won't be able to revert this!", eliminar, parametro)=>{
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
      eliminar(parametro); 
      Swal.fire({
        title: "Eliminar",
        text: "Se elimino correctamente",
        icon: "success"
      });
    }
  });
}
