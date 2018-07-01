var hbs = require('hbs');
//helpers
//PARA OBTENER EL AÑO
hbs.registerHelper('getAnio', () => {
    return new Date().getFullYear();
});

//hacer que todas las palabras comiencen con mayusculas
hbs.registerHelper('capitalizar', (texto) => {
    
    let palabras = texto.split(' ');
    palabras.forEach( (palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });

    return palabras.join(' ');
});