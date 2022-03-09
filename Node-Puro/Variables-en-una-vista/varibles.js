var http = require('http'),
    fs = require('fs');

http.createServer((req,res) => { 
    fs.readFile('./Variables-en-una-vista/index.html', (err,html) => {
        var html_string = html.toString();
        //Encuentras lo que está dentro de las llaves
        var variables = html_string.match(/[^\{\}]+(?=\})/g);
        var nombre = "Usuario";
        for (var i = variables.length-1; i >= 0; i--) {
            var value = eval(variables[i]);
            html_string = html_string.replace("{"+variables[i]+"}",value);
        }
        res.write(html_string);
        res.end(); 
    });
}).listen(3000);