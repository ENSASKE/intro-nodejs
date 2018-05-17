// borrar contenido de un archivo

/*
fs.ftruncate(fd, len, callback)

Parámetros

fd − Este es el descriptor de archivo devuelto por fs.open()
len − Esta es la longitud del archivo después del cual el archivo se truncará.
callback − Es la función callback y solo usa un parámetro "err".
*/

var fs = require("fs");
var buf = new Buffer(1024);

console.log("abriendo archivo");
fs.open('truncar.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("archivo abierto");
   console.log("borrando datos del archivo despues de los 10 bytes");
   
   // Se trunca/borra el archivo abierto.
   fs.ftruncate(fd, 10, function(err){
      if (err){
         console.log(err);
      } 
      console.log("Archivo truncado");
      console.log("Leyendo el mismo archivo"); 
      
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
            console.log("archivo cerrado");
         });
      });
   });
});