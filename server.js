const express = require('express')
const hbs = require('hbs');

const app = express();

// Express HBS engine
app.set('view engine', 'hbs');
require('./hbs/helpers.js');

const port = process.env.PORT || 3000;

//Especifica la ruta donde cargara parciales de código que se renderizará, tambien
//pueden ser bloques de codigo, revisar documentación npm hbs partials
hbs.registerPartials(__dirname + '/views/parciales');  // (err) => { console.log("Ha sucedido uns error al agregar el directorio a parciales", err)}  

app.use( express.static (__dirname + '/public') ); //El __dirname indica que use el path donde sea que este y le concatene la ruta especificada, lo cual es util al estarr en el servidor

// app.get('/', (req, res) => { //Establece que la peticiones con / van a ser tipo get
// //  res.send('Hola Mundo, por express');
// let salida = {
//     nombre: 'Rusel',
//     edad: 35,
//     url: req.url
// }

// res.send(salida); //Al aplicar el res.send auntomaticamente detecta que es un objeto js y lo manda en formato JSON
  
// });

app.get('/', (req, res) => {
    res.render('home',
    { //Mandamos un objeto que los valores de las variables
        nombre:'rusel arceo',
    }); //Permite manda un archivo que se va a renderizar, actualizar cambios
                //Para esto debe estar instalado el hbs y usar el res.set
                //Nunca especifique que tome home como inicial, supongo
                //que esta predefinido, usar views/home

});

app.get('/about', (req, res) => {  //Hay que hablitar cada uno de los enlaces a los que se dirigirá la página
    res.render('about');
});

app.get('/data', (req, res) => { //Establece que la peticiones con / van a ser tipo get
     res.send('Hola Mundo, por DATA express');      
    });
     
 
app.listen(port, ( ) => { console.log(`Escuchando peticiones en el puerto ${port}`) } );  //El listen recibe un callback donde podemos mandar información, como la impresión a consola que se dispara al momento de estar arriba el servidor (listen)