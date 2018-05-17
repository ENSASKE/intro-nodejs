// borrar un usuario existente, fijo por id
// ver resultado:
/*
  fetch('', {
    method: 'delete'
  })
      .then(function (a) {
        return a.json();
    })
    .then(function (json) {
        console.log(json)
    })
*/

var express = require('../10-express_framework/node_modules/express');
var app = express();
var fs = require("fs");

var id = 2;

app.delete('/', function (req, res) {

   // Leemos el archivo de usuarios, borramos del array pero no borramos del archivo original
   fs.readFile( __dirname + "/" + "usuarios.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + 2];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Ejemplo de app corriendo en http://%s:%s", host, port)

})