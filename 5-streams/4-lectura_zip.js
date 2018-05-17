var fs = require("fs");
var zlib = require('zlib');

// Comprime el archivo "leer.txt" en el archivo "leer.gz"
fs.createReadStream('leer.txt')
   .pipe(zlib.createGzip())
   .pipe(fs.createWriteStream('leer.gz'));
  
console.log("Archivo comprimido");