//Copiar buffer

/*
buf.copy(targetBuffer[, targetStart][, sourceStart][, sourceEnd])

Parámetros

targetBuffer − El objeto Buffer dónde el buffer será copiado.
targetStart − Number, Optional, Default: 0
sourceStart − Number, Optional, Default: 0
sourceEnd − Number, Optional, Default: buffer.length
*/

var buffer1 = new Buffer('ABC');

//copiar a buffer
var buffer2 = new Buffer(3);
buffer1.copy(buffer2);
console.log("buffer2 contenido: " + buffer2.toString());