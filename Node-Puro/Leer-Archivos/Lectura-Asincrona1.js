var http = require('http'),
    fs = require('fs');

fs.readFile('./Leer-Archivos/index.html', (err,html) => {
    http.createServer((req,res) => {
        res.write(html);
        res.end();
    }).listen(3000);
});

