//crear buffers

/*
Admite varios tipos de entradas:

var buf = new Buffer(10);
var buf = new Buffer([10, 20, 30, 40, 50]);
var buf = new Buffer("Simply Easy Learning", "utf-8"); //"ascii", "utf8", "utf16le", "ucs2", "base64", "hex"
*/

/*
buf.write(string[, offset][, length][, encoding])

Parámetros

string − El string que se escribirá en el buffer.
offset − El índice del buffer donde comenzará a escribir. Por defecto el valor es 0.
length − El número de bytes a escribir. Por defecto usa "buffer.length".
encoding − Codificación a usar. Por defecto "utf8"
*/
buf = new Buffer(256);
len = buf.write("Texto simple");

console.log("Octetos escritos: "+  len);