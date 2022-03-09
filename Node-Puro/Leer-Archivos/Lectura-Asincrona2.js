var http = require('http'),
    fs = require('fs');

//Ahora se lee el archivo CADA VEZ que se haga una peticion
//Por ende, cada vez que se actualice algo en el "index.html"
//ya no se reinicia el servidor, porque se actualiza solo (por la nueva peticion)
http.createServer((req,res) => { 
    fs.readFile('./Leer-Archivos/index.html', (err,html) => {
        res.write(html);
        res.end(); 
    });
}).listen(3000);