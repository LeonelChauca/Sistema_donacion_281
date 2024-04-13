import Swal from 'sweetalert2'

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

