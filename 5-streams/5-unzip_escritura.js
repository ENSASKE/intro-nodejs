var fs = require("fs");
var zlib = require('zlib');

// Descomprime el archivo "leer.gz" en "leer.txt"
fs.createReadStream('leer.gz')
   .pipe(zlib.createGunzip())
   .pipe(fs.createWriteStream('leer.txt'));
  
console.log("Archivo descomprimido");