export class InterseccionObjerver{

   
    self=this
    constructor(clases ,elemento){
        self.clases = clases ;   
        self.html = elemento; 
    }

    setClases(clases){
        self.clases=clases ; 
    }

    agregarClases(elemento){

        self.clases.forEach(element => {
            elemento.classList.add(element)
        });
    }
    eliminarClases(elemento){

        self.clases.forEach(element => {
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
                 
                 self.clases.forEach(element => {
                    elementoObservado.classList.add(element)
                });
           //     console.log('El elemento', elementoObservado, 'está en la vista');                
            } else {
                //elementoObservado.classList.remove('animate__animated','animate__zoomIn')
                self.clases.forEach(element => {
                    elementoObservado.classList.remove(element)
                });
             //   console.log('El elemento', elementoObservado, 'No está en la vista');                
            }
        });
    }

    // Crea una nueva instancia de Intersection Observer con la función de callback y las opciones
    observador = new IntersectionObserver(this.callbackInterseccion, this.opciones);

    Observar(){
        this.observador.observe(document.querySelector(self.html)); 
    }

    DesObservar(){
        this.observador.unobserve(document.querySelector(self.html)); 
    }

    
}