const hbs = require('hbs');

hbs.registerHelper('getAnio',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('capitalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        //toUpperCase() convierte a mayuscula + palabra.slice() divide y devuelve a partir de la position 1 .toLowerCase()  convierte a minusculas
        });
     
     return palabras.join(' '); //join une un arreglo en una sola cadena, separando en este caso con espacios
});
