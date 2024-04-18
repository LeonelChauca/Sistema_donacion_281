import Swal from "sweetalert2";

export const okConfirmacion=()=>{
    Swal.fire({
        title:"Enviado !",
        text:"la donacion se envio para su previa solicitud",
        icon:"success"
    })
}
export const errorFConfirmacion=()=>{
    Swal.fire({
        title:"Error !",
        text:"Elije una fecha valida",
        icon:"error"
    })
}