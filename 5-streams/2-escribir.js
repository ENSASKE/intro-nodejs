var fs = require("fs");
var data = 'Texto simple con múltiples \n líneas para verificar';

// Creamos un stream leíble
var writerStream = fs.createWriteStream('escribir.txt');

// Escribimos los datos al stream con cofificación utf8
writerStream.write(data,'UTF8');

// Establecemos el fin del archivo
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Escritura completada");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

console.log("FINALIZADO");