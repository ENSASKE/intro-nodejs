// eliminar carpeta

/*
fs.rmdir(path, callback)

Parámetros

path − Es la ruta y nombre de la carpeta.
callback − Es la función callback y solo usa un parámetro "err".
*/

var fs = require("fs");

console.log("borrando carpeta 'prueba'");
fs.rmdir("prueba",function(err){
   if (err) {
      return console.error(err);
   }
   console.log("leyendo carpeta actual '.'");
   
   fs.readdir(".",function(err, files){
      if (err) {
         return console.error(err);
      }
      files.forEach( function (file){
         console.log( file );
      });
   });
});