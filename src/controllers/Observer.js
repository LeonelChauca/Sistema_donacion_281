const opciones = {
    root: null, // el área de la ventana se utiliza como área de observación
    rootMargin: '40px',
    threshold: 0 // Observa solo la parte superior e inferior del elemento
};
let elementoObservadoAnterior = null;
function callbackInterseccion(entries, observer) {
    entries.forEach(entry => {
        const elementoObservado = entry.target;
        if (elementoObservadoAnterior !== elementoObservado) {

            if (elementoObservado.classList.contains(style.texto)) {
                // Si el elemento observado tiene la clase "texto"
                if (entry.isIntersecting) {
                    elementoObservado.classList.add('animate__animated', 'animate__flipInY');
                    elementoObservadoAnterior = elementoObservado;
                } else {
                    elementoObservado.classList.remove('animate__animated', 'animate__flipInY');
                    elementoObservadoAnterior = null;
                }
            } else if (elementoObservado.classList.contains(style.optimizacion)) {
                // Si el elemento observado tiene la clase "optimizacion"
                if (entry.isIntersecting) {
                    elementoObservado.classList.add('animate__animated', 'animate__jackInTheBox');
                    elementoObservadoAnterior = elementoObservado;
                } else {
                    elementoObservado.classList.remove('animate__animated', 'animate__jackInTheBox');
                    elementoObservadoAnterior = null;
                }
            } else if (elementoObservado.classList.contains(style.right)) {
                if (entry.isIntersecting) {
                    elementoObservado.classList.add('animate__animated', 'animate__fadeInRight');
                    elementoObservadoAnterior = elementoObservado;
                } else {
                    elementoObservado.classList.remove('animate__animated', 'animate__fadeInRight');
                    elementoObservadoAnterior = null;
                }
            } else if (elementoObservado.classList.contains(style.left)) {
                if (entry.isIntersecting) {
                    elementoObservado.classList.add('animate__animated', 'animate__fadeInLeft');
                    elementoObservadoAnterior = elementoObservado;
                } else {
                    elementoObservado.classList.remove('animate__animated', 'animate__fadeInLeft');
                    elementoObservadoAnterior = null;
                }
            }
        }
    });
}


const obs = new IntersectionObserver(callbackInterseccion, opciones)

export  default obs; 

//obs.observe(document.querySelector("." + style.texto));