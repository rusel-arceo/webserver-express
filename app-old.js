const http = require('http'); //paquete para crear el servidor

http.createServer ( (req, res) =>{ //req son las solicitudes y res las respuestas que el servidor va a enviar, crea el servidor
    res.writeHead(200, {'content-type': 'application/json'}); // Esto devuelve una respuesta y el tipo, el 200 es ok. todo bien, 400 mala respuestas, son las respuestas que proporciona un servidor http

    let salida = {
        nombre: 'Rusel',
        edad: 35,
        url: req.url
    }

    //res.write('Hola Mundo');  //Crea un archivo html con un hola mundo como respuesta, es el ejemplo.
    res.write(JSON.stringify(salida));
    res.end(); //indica que ya terminamos de crear la respuesta, es necesario
})
.listen (8080);

console.log("Escuchando el puerto 8080");
