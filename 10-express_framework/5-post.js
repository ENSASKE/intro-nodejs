var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Creamos un parser application/x-www-form-urlencoded
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "formulario_post.htm" );
 })
 
 app.get('/formulario_post.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "formulario_post.htm" );
 })

app.post('/procesar_post', urlencodedParser, function (req, res) {
   // Salida en formato JSON
   response = {
      first_name:req.body.nombre,
      last_name:req.body.apellido
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Ejemplo de app corriendo en http://%s:%s", host, port)
})