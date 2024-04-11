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

export const AlertaConfirmacionHab=()=>{  
   Swal.fire({
      title:" Usuario habilitado correctamente",
      text: `Usuario Registrado`,
      icon:"success"
   })
}

export const AlertaConfirmacionDonacion=()=>{  
  Swal.fire({
     title:"Se solicito  su postulacion",
     text: `Espera la confirmacion de Encargado`,
     icon:"success"
  })
}



export const masInfo=(lista)=>{  
   
  let cadena="<h4>Productos </h4>"
  lista.producto.map((e)=>{
    cadena+=`
    <div  style="background:#e7e7e7; margin:2px;display:flex; flex-direction: column; align-items: flex-start">
     <p>Tipo: ${e.tipo_p}</p>
     <p>Nombre: ${e.nombre_p}</p>
     <p>Cantidad:${e.medida_unitaria_p}</p>
    </div>
    `
  })
  cadena+=`<hr/>`
  cadena+="<h4>Alimentos</h4>"
  lista.alimento.map((e)=>{
    cadena+=`
    <div  style="background:#e7e7e7; margin:2px;display:flex; flex-direction: column; align-items: flex-start">
    <p>Nombre:  ${e.nombre_a}</p>
    <p>Cantidad: ${e.cantidad_a}</p>
    </div>
    `
  })
  cadena+=`<hr/>`
  cadena+="<h4>Dinero</h4>"
    
  lista.dinero.map((e)=>{
    cadena+=`
    <div  style="background:#e7e7e7; margin:2px;display:flex; flex-direction: column; align-items: flex-start">
    <p>Monto:  ${e.monto} ${e.cambio}</p>
    </div>
    `
  })
    
  

  Swal.fire({
    title:"Listas de productos",
    html:cadena,
    
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

/*alertas para admin*/ 
export const AlertaDesactivarUsuarioAdmin=()=>{
  return new Promise((resolve,reject)=>{
    Swal.fire({
      title: "Estas seguro?",
      text: "La accion no se podra revertir!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, Borrar!",
      cancelButtonText:'No',
    }).then((result) => {
      if (result.isConfirmed) {
        resolve(true)
      }
      else{
        resolve(false)
      }
    });
  })
  
}
