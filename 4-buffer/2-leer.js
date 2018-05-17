//leer buffer

/*
buf.toString([encoding][, start][, end])

Parámetros

encoding − Codificación a usar. Por defecto "utf8".
start − El índice del buffer donde comenzará a leer. Por defecto el valor es 0.
end − El índice del buffer donde terminará de leer. Por defecto lee el buffer completo.
*/

buff = new Buffer(26);
for (var i=0; i<26; i++) {
  buff[i] = i + 97;
}

console.log(buf.toString('ascii'));       // imprime: abcdefghijklmnopqrstuvwxyz
console.log(buf.toString('ascii',0,5));   // imprime: abcde
console.log(buf.toString('utf8',0,5));    // imprime: abcde
console.log(buf.toString(undefined,0,5)); // codificación por defecto es "utf8", imprime abcde