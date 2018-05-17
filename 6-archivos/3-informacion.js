// Información de un archivo o carpeta

/*
fs.stat(path, callback)

Parámetros

path − String con la ruta y nombre del archivo.
callback − La función callback a usar, con dos parámetros (err, stats) donde stats es un objeto de tipo "fs.Stats".

Método	                    Descripción
stats.isFile()	            Regresa true si es un archivo.
stats.isDirectory()	        Regresa true si es una carpeta.
stats.isBlockDevice()	    Regresa true si es un dispositivo de bloques (un USB, un disco o partición sda, sda1, etc.)
stats.isCharacterDevice()	Regresa true si es un dispositivo de caracteres.
stats.isSymbolicLink()	    Regresa true si es un link simbólico.
stats.isFIFO()	            Regresa true si es FIFO.
stats.isSocket()	        Regresa true si es un socket.
*/

var fs = require("fs");

console.log("Obteniendo información del archivo");
fs.stat('texto.txt', function (err, stats) {
   if (err) {
       return console.error(err);
   }
   console.log(stats);
   console.log("Información obtenida");
   
   // Revisamos el tipo de archivo
   console.log("¿Es un archivo? " + stats.isFile());
   console.log("¿Es una carpeta? " + stats.isDirectory());    
});