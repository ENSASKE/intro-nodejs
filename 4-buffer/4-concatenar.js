//concatenar buffers

/*
Buffer.concat(list[, totalLength])

Parámetros

list − Array List de objetos Buffer para ser concatenados.
totalLength − Es el tamaño total del buffer despues de concatenado.
*/
var buffer1 = new Buffer('buffer1: Hola ');
var buffer2 = new Buffer('buffer2: Mundo ');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 contiene: " + buffer3.toString());