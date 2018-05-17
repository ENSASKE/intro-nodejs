// agregar usuarios, se debe ejecutar un post y no se espera que sea por un formulario

//para probar con la consola de firefox o chrome:
/*
var formPost = document.createElement('form');
formPost.method = 'POST';
formPost.action = ''; //or any location you want
document.body.appendChild(formPost);
formPost.submit();
*/

var express = require('../10-express_framework/node_modules/express');
var app = express();
var fs = require("fs");

var usuario = {
    "user" : {
         "id": "4",
         "nombre" : "otro usuario",
         "password" : "123456",
         "admin" : false
     }
 }

app.post('/', function (req, res) {
   // Leemos el archivo de usuarios y anexamos a la salida el nuevo usuario sin modificar el archivo original
   fs.readFile( __dirname + "/" + "usuarios.json", {encoding: 'utf8'}, function (err, data) {
       data = JSON.parse( data );
       data["user4"] = usuario["user"];
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Ejemplo de app corriendo en http://%s:%s", host, port)

})