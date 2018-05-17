//Cortar buffer

/*
buf.slice([start][, end])

Parámetros

start − Number, Optional, Default: 0
end − Number, Optional, Default: buffer.length
*/


var buffer1 = new Buffer('Buffer principal creado');

//Cortando el buffer
var buffer2 = buffer1.slice(0,9);
console.log("buffer2 contenido: " + buffer2.toString());