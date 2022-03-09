//Esto es una sencilla creación de servidor local
var http = require('http');
var manejador = function(req, res) {
    console.log("Se recibió la petición");
    res.end("Hola Mundo!");
}
var servidor = http.createServer(manejador);

servidor.listen(3000);
