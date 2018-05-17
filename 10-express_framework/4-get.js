var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "formulario_get.htm" );
})

app.get('/formulario_get.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "formulario_get.htm" );
})

app.get('/procesar_get', function (req, res) {
   // Salida en formato JSON
   response = {
      first_name:req.query.nombre,
      last_name:req.query.apellido
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Ejemplo de app corriendo en http://%s:%s", host, port)
})