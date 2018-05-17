// Leer contenido de una carpeta

/*
fs.readdir(path, callback)

Parámetros

path − Es la ruta y nombre de la carpeta.
callback − Es la función callback y usa dos parámetros (err, files) donde "files" es un array de nombres de los archivos de esa carpeta y no incluye las carpetas "." y ".."
*/

var fs = require("fs");

console.log("leyendo carpeta actual '.'");
fs.readdir(".",function(err, files){ // . usa punto para leer la carpeta actual, puede cambiarse con otra ruta "/tmp/prueba"
   if (err) {
      return console.error(err);
   }
   files.forEach( function (file){
      console.log( file );
   });
});

