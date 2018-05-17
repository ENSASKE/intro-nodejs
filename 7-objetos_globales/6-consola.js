// Objeto console

/*
Métodos de console

S.No.	Método y Descripción
1       console.log([data][, ...])                  Imprime al stdout con una nueva línea. Esta función acepta múltiples argumentos similar a printf()
2	    console.info([data][, ...])                 Imprime al stdout con una nueva línea. Esta función acepta múltiples argumentos similar a printf()
3       console.error([data][, ...])                Imprime al stderr con una nueva línea. Esta función acepta múltiples argumentos similar a printf()
4       console.warn([data][, ...])                 Imprime al stderr con una nueva línea. Esta función acepta múltiples argumentos similar a printf()
5       console.dir(obj[, options])                 Usa util.inspect en un objeto e imprime el string devuelto al stdout.
6       console.time(label)                         Establece un tiempo.
7       console.timeEnd(label)                      Termina el cronómetro, registra la salida.
8       console.trace(message[, ...])               Imprime al stderr 'Trace :', seguido por el mensaje con formato y  el seguimiento de la pila (stack trace) a la posición actual.
9       console.assert(value[, message][, ...])     Similar a assert.ok(), pero el mensaje de error está formateado como util.format(message...).
*/

console.info("INICIO");

var contador = 10;
console.log("Contador: %d", contador);

console.time("label");

console.timeEnd("label");

console.info("FINAL");