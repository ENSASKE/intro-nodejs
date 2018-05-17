//Abrir archivo

/*
fs.open(path, flags[, mode], callback)

Parámetros

path      − String con la ruta y el nombre del archivo.
flags     − Flags indica el comportamiento del archivo a abrir. Abajo se encuentra los distintos flags
mode      − Establece el modo del archivo (permisos), pero solo si el archivo fue creado. Por defecto usa 0666, lectura y escritura.
callback  − La función callback a usar, con dos parámetros (err, fd).

Flags
Flags para operaciones de lectura/escritura

Flag	Descripción
r	      Abre el archivo para lectura. Lanza una excepción sino existe el archivo.
r+	    Abre el archivo para lectura y escritura. Lanza una excepción sino existe el archivo.
rs	    Abre el archivo para lectura en modo síncrono.
rs+	    Abre el archivo para lectura y escritura, pide al SO abrirlo síncrono. Buscar en la documentación sobre "rs", usar con precaución.
w	      Abre el archivo para escritura. El archivo es creado sino existe o borrado (reemplazado) si ya existe.
wx	    Similar al anterior "w" pero falla si ya existe el archivo.
w+	    Abre el archivo para lectura y escritura. El archivo es creado sino existe o borrado (reemplazado) si ya existe.
wx+	    Similar al anterior "w+" pero falla si ya existe el archivo.
a	      Abre el archivo para agregar. El archivo es creado sino existe.
ax	    Similar al anterior "a" pero falla si ya existe el archivo.
a+	    Abre el archivo para lectura y agregar. El archivo es creado sino existe.
ax+	    Similar al anterior "a+" pero falla si el archivo ya existe.
*/

var fs = require("fs");

// Asíncrono - Abre el archivo
console.log("Abriendo archivo");
fs.open('texto.txt', 'r+', function(err, fd) {
   if (err) {
      return console.error(err);
   }
  console.log("Archivo abierto");     
});