// Eliminar un archivo

/*
fs.unlink(path, callback)

Parámetros

path − La ruta con el nombre del archivo.
callback − Es la función callback y solo usa un parámetro "err".
*/

var fs = require("fs");

console.log("eliminando archivo");
fs.unlink('eliminar.txt', function(err) {
   if (err) {
      return console.error(err);
   }
   console.log("archivo eliminado");
});