var http = require('http');

// Opciones para ser usadas en la petición
var options = {
   host: 'localhost',
   port: '8081',
   path: '/index.htm'  
};

// La función Callback es usada para menejar la respuesta
var callback = function(response){
   // Continuamente actualizamos el stream con los datos
   var body = '';
   response.on('data', function(data) {
      body += data;
   });
   
   response.on('end', function() {
      // Datos recibidos completamente
      console.log(body);
   });
}

// Hacemos una petición al servidor
var req = http.request(options, callback);
req.end();