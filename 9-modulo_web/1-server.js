var http = require('http');
var fs = require('fs');
var url = require('url');

// Crea un servidor
http.createServer( function (request, response) {  
   // Enruta la petición al archivo
   var pathname = url.parse(request.url).pathname;
   
   // Imprime el nombre del archivo que fue solicitado en la petición
   console.log("Página solicitada: " + pathname);
   
   // Leemos el contenido del archivo solicitado
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      }else {	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain
         response.writeHead(200, {'Content-Type': 'text/html'});	
         
         // Escribimos el contenido del archivo al cuerpo de la respuesta
         response.write(data.toString());		
      }
      // Enviamos la respuesta
      response.end();
   });   
}).listen(8081);

// La consola imprimirá este mensaje
console.log('Servidor corriendo en http://127.0.0.1:8081/');