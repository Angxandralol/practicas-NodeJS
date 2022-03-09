var http = require('http'),
    fs = require('fs');

var html = fs.readFileSync('./Leer-Archivos/index.html');

http.createServer((req,res) => {
    res.write(html);
    res.end();
}).listen(3000);