export default function setScrollTop(params) {
    document.body.scrollTop = params; // Para navegadores que no sean Firefox
    document.documentElement.scrollTop = params; // Para Firefox    
}
