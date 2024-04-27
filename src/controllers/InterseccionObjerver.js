export class InterseccionObjerver{

   
    constructor(){
        
    }

    setClases(clases){
        this.clases=clases ; 
    }

    agregarClases(elemento){

        this.clases.forEach(element => {
            elemento.classList.add(element)
        });
    }
    eliminarClases(elemento){

        this.clases.forEach(element => {
            elemento.classList.remove(element)
        });
    }
      // Configura las opciones para el Intersection Observer
    opciones = {
        root: null, // el área de la ventana se utiliza como área de observación
        //rootMargin:'200px 1000px',
        threshold: [0, 1] // Observa solo la parte superior e inferior del elemento
    };

    // Función de callback que se ejecutará cuando cambie la intersección
    callbackInterseccion(entries, observer) {
        // Itera sobre las entradas de intersección
        entries.forEach(entry => {
           const elementoObservado = entry.target;
            if (entry.isIntersecting ) {

                 //elementoObservado.classList.add('animate__animated','animate__zoomIn')
                 agregarClases(elementoObservado)
           //     console.log('El elemento', elementoObservado, 'está en la vista');                
            } else {
                //elementoObservado.classList.remove('animate__animated','animate__zoomIn')
                eliminarClases(elementoObservado)
             //   console.log('El elemento', elementoObservado, 'No está en la vista');                
            }
        });
    }

    // Crea una nueva instancia de Intersection Observer con la función de callback y las opciones
    observador = new IntersectionObserver(callbackInterseccion, opciones);

    getObservador(){
        return this.observador; 
    }

    
}