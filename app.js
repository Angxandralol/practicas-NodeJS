const express = require('express');
const app = express();
const port = 3000;

app.set("view engine", "jade");

app.get('/', (req,res) => {
    res.render("index");
});

//Starting of server
app.listen(port, (req, res) => {
    console.log(`Server on: http://localhost:${port}/`);
});