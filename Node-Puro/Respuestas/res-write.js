var http = require('http'),
    fs = require('fs');

//res.write manda pedazos de datos de la respuesta del servidor
//res.writeHeadv escribe los encabezados de la respuesta
//StatusCode: Numeros que indican lo que pasó en el servidor
//200... -> indican que todo salio bien
//300... -> indican que algo de lo que se busca se movio
//400... -> indican que algo de lo que se buscoó no se encontró
//500... -> indican errores

http.createServer((req,res) => { 
    fs.readFile('./Leer-Archivos/index.html', (err,html) => {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        res.write(JSON.stringify({nombre: "Angyee", username: "angxandralol"}));
        res.end();
    });
}).listen(3000);