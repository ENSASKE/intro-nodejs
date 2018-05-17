// establece el tiempo de ejecución pero se elimina antes de su ejecución

function hola(){
    console.log("Hola Mundo");
 }
 
 // se llama la función "hola" despues de 2 segundos
 var t = setTimeout(hola, 2000);
 
 // limpiar el temporizador y no imprime nada
 clearTimeout(t);