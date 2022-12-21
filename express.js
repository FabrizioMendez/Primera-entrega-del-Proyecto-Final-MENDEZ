let express = require("express");
const moment = require("moment");
const PORT = process.env.PORT || 8080;  
let app = express();

// var items = Array(523, 3452, 334, 31, ..., 5346);             |esto es para saber como hacer seleccion ramdom del array .txt |
// var item = items[Math.floor(Math.random()*items.length)];     L______________________________________________________________⅃

app.get("/", (req, res, next) =>{
    res.send(`<h1></h1>Bienvenidos al servidor!!<h1>`);;
})


app.get("/productos", (req, res, next) =>{
    // res.send(`<h2>Lista de Productos<h2> <h4>aca la lista de los productos<h4>`)
})

app.get("/ramdom", (req, res, next) =>{
    // var ramdom = lista de productos[Math.floor(Math.ramdom()*lista de productos.length)] 
})

app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));