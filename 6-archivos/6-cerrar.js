// cerrar archivo despues de abrirlo

/*
fs.close(fd, callback)

Parámetros

fd − Este es el descriptor de archivo devuelto por el método de archivo fs.open()
callback − Es la función callback y solo usa un parámetro "err".
*/

var fs = require("fs");
var buf = new Buffer(1024);

console.log("abriendo archivo");
fs.open('texto.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("archivo abierto");
   console.log("leyendo archivo");
   
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }

      // Imprime solamente bytes leídos para evitar datos de más
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }

      // Cierra el archivo abierto
      fs.close(fd, function(err){
         if (err){
            console.log(err);
         } 
         console.log("archivo cerrado correctamente");
      });
   });
});