// Escribir archivo

/*
fs.writeFile(filename, data[, options], callback)

Este método sobrescribirá el archivo si ya existe. Si deseas escribir dentro de un archivo existente, debes usar otro método disponible.

Parámetros

path − String con la ruta y el nombre del archivo.
data − String o Buffer a ser escrito dentro del archivo.
options − Objeto que puede contener "{encoding, mode, flag}". El encoding es utf8 por defecto, mode es un valor octal 0666 y flag es "w".
callback − Es la función callback a ser llamado, solo usa un parámetro "err" que devuele un error si existe error al escribir.
*/

var fs = require("fs");

console.log("Escribiendo datos");
fs.writeFile('escribir.txt', 'Un simple texto',  function(err) {
   if (err) {
      return console.error(err);
   }
   
   console.log("Datos escritos correctamente");
   console.log("Leer datos escritos");
   fs.readFile('escribir.txt', function (err, data) {
      if (err) {
         return console.error(err);
      }
      console.log("Lectura asíncrona: " + data.toString());
   });
});