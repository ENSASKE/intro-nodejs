// correr con "node leer_sincrono_sin_callback.js"
// Este ejemplo demuestra que es sincrono, lee el archivo y luego imprime "FINALIZADO"

var fs = require("fs");

var data = fs.readFileSync('texto.txt');

console.log(data.toString());
console.log("FINALIZADO");