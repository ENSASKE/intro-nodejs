// se debe correr desde consola CMD con el comando "node hola.js" y luego ir a http://127.0.0.1:8081/ o localhost
var http = require("http");

http.createServer(function (request, response) {

   // Envía la cabecera HTTP
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Envía el cuerpo de la respuesta como "Hola Mundo"
   response.end('Hola Mundo\n');
}).listen(8081);

// La consola envía el mensaje
console.log('Servidor iniciado en http://127.0.0.1:8081/');