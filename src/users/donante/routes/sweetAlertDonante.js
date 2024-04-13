import Swal from 'sweetalert2'

export const AlertaOkAddListaDonacion=()=>{
    Swal.fire({
        title: "Producto añadido con exito",
        text: "Puedes revisar la confirmacion de la donacion",
        icon: "success"
      });
}

export const AlertaNoAddListaDonacion=()=>{
  Swal.fire({
      title: "Ha sucedido un error !",
      text: "Intentalo de nuevo",
      icon: "error"
    });
}