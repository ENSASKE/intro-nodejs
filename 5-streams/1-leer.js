var fs = require("fs");
var data = '';

// Creamos un stream leíble
var readerStream = fs.createReadStream('leer.txt');

// Establecer la cofificación utf8. 
readerStream.setEncoding('UTF8');

// Manejar eventos del stream "data" "end" "error"
readerStream.on('data', function(chunk) {
   data += chunk;
});

readerStream.on('end',function(){
   console.log(data);
});

readerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("FINALIZADO");