var fs = require("fs");

// Creamos un stream leíble
var readerStream = fs.createReadStream('leer.txt');

// Creamos un stream escribible
var writerStream = fs.createWriteStream('escribir.txt');

// Une las operaciones de lectura y escritura
// lee el archivo "leer.txt" y escribe los datos en el archivo "escribir.txt"
readerStream.pipe(writerStream);

console.log("FINALIZADO");