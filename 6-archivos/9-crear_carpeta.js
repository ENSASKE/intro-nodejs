// crear una carpeta

/*
fs.mkdir(path[, mode], callback)

Parámetros

path − Es la ruta y el nombre de la carpeta.
mode − Los permisos de la carpeta, por defecto usa 0777.
callback − Es la función callback y solo usa un parámetro "err".
*/

var fs = require("fs");

console.log("creando carpeta 'prueba'");
fs.mkdir('prueba',function(err){
   if (err) {
      return console.error(err);
   }
   console.log("carpeta creada");
});