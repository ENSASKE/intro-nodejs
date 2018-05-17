// El servidor usa el framework express, escucha la ruta raiz /, lee el archivo json y lo muestra

var express = require('../10-express_framework/node_modules/express');
var app = express();
var fs = require("fs");

app.get('/', function (req, res) {
   fs.readFile( __dirname + "/" + "usuarios.json", {encoding: 'utf8'}, function (err, data) {
      objJson = JSON.parse( data );
      console.log(objJson);

      html = "";
      html += '<table>'

      Object.entries(objJson).map(([usuario, objDatosUsuario]) => {
          html += '<tr>'
            html += '<td>'+ usuario +'</td>';
            html += '<td>'+ objDatosUsuario.id +'</td>';
            html += '<td>'+ objDatosUsuario.nombre +'</td>';
            html += '<td>'+ objDatosUsuario.password +'</td>';
            html += '<td>'+ objDatosUsuario.admin +'</td>';
          html += '</tr>';
      })
      
      html += '</table>'

       res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
       console.log( data );
       res.end( html );
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Ejemplo de app corriendo en http://%s:%s", host, port)

})