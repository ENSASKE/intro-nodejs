//Comparar buffers

/*
buf.compare(otherBuffer);

Parámetros

otherBuffer − Este es el otro buffer el cual será comparado
*/

var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 +" viene antes de " + buffer2);
}else if(result == 0){
   console.log(buffer1 +" es lo mismo que " + buffer2);
}else {
   console.log(buffer1 +" viene después de " + buffer2);
}