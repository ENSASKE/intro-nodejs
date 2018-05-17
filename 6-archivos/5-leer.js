// lectura de un archivo

/*
fs.read(fd, buffer, offset, length, position, callback)
Este método usará el descriptor de archivo para leer el archivo. Si desea leer el archivo directamente con el nombre del archivo, debe usar otro método disponible.

Parámetros

fd − Este es el descriptor de archivo devuelto por fs.open().
buffer − Este es el buffer donde se escribirán los datos.
offset − Este es la posición en el búfer para comenzar a escribir.
length − Este es un número entero que especifica el número de bytes a leer.
position − Este es un número entero que especifica dónde comenzar a leer en el archivo. Si la posición es nula, los datos se leerán desde la posición actual del archivo.
callback − Es la función callback y usa tres parámetros (err, bytesRead, buffer).
*/

var fs = require("fs");
var buf = new Buffer(1024);

console.log("Abriendo archivo existente");
fs.open('texto.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
   console.log("Archivo abierto");
   console.log("Leyendo archivo");
   fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
      if (err){
         console.log(err);
      }
      console.log(bytes + " bytes leídos");
      
      // Imprime solamente bytes leídos para evitar datos de más
      if(bytes > 0){
         console.log(buf.slice(0, bytes).toString());
      }
   });
});