//Esto es una sencilla creación de servidor local
var http = require('http');
var servidor = http.createServer((req, res) => {
    console.log("Se recibió la petición");
    res.end("Hola Mundo!");
});

servidor.listen(3000, ()=> {
    console.log("Servidor iniciado con éxito!");
});