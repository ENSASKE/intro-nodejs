// buscar usuario por id, con un simple get
// http://localhost:8081/2

var express = require('../10-express_framework/node_modules/express');
var app = express();
var fs = require("fs");

app.get('/:id', function (req, res) {
   // Leemos primero el archivo y buscamos el usuario solicitado por id
   fs.readFile( __dirname + "/" + "usuarios.json", 'utf8', function (err, data) {
      var users = JSON.parse( data );
      var user = users["user" + req.params.id] 
      console.log( user );
      res.end( JSON.stringify(user));
   });
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port
   console.log("Ejemplo de app corriendo en http://%s:%s", host, port)

})