var fs = require("fs");

// Lectura Asíncrona
fs.readFile('texto.txt', function (err, data) {
   if (err) {
      return console.error(err);
   }
   console.log("Lectura Asíncrona: " + data.toString());
});

// Lectura síncrona
var data = fs.readFileSync('texto.txt');
console.log("Lectura síncrona: " + data.toString());

console.log("FINALIZADO");