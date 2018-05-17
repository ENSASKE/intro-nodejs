// correr con "node leer_asincrono_con_callback.js"
// Este ejemplo demuestra que es asincrono, imprime "FINALIZADO" antes de terminar de leer el archivo

var fs = require("fs");

fs.readFile('texto.txt', function (err, data) {
   if (err) return console.error(err);
   console.log(data.toString());
});

console.log("FINALIZADO");