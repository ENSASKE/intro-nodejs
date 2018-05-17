// errores no manejebles

/*
Métodos

S.No. 	Método y Descripción
1 	    domain.run(function)        Ejecute la función suministrada en el contexto del dominio, vinculando implícitamente todos los emisores de eventos, temporizadores y solicitudes de nivel bajo que se creen en ese contexto. Esta es la forma más básica de usar un dominio.
2 	    domain.add(emitter)         Agrega explícitamente un emisor al dominio. Si algún controlador de eventos llamado por el emisor arroja un error, o si el emisor emite un evento de error, se enrutará al evento de error del dominio, al igual que con el enlace implícito.
3 	    domain.remove(emitter)      Lo opuesto a domain.add (emisor). Elimina el manejo del dominio del emisor especificado.
4 	    domain.bind(callback)       La función devuelta será una envoltura alrededor de la función de callback proporcionada. Cuando se llama a la función devuelta, cualquier error que se genere se enrutará al evento de error del dominio.
5 	    domain.intercept(callback)  Este método es casi idéntico a domain.bind (callback). Sin embargo, además de detectar errores lanzados, también interceptará los objetos de error enviados como primer argumento de la función.
6 	    domain.enter()              El método enter es la fontanería utilizada por los métodos de ejecución, vinculación e intercepción para establecer el dominio activo. Establece domain.active y process.domain en el dominio e implícitamente empuja el dominio en la pila de dominio administrada por el módulo de dominio (consulte domain.exit () para obtener detalles sobre la pila de dominios). La llamada a entrar delimita el comienzo de una cadena de llamadas asíncronas y operaciones de E/S vinculadas a un dominio.
7 	    domain.exit()               El método de salida sale del dominio actual y lo saca de la pila de dominios. Siempre que la ejecución cambie al contexto de una cadena diferente de llamadas asincrónicas, es importante asegurarse de que el dominio actual se cierre. La llamada a la salida delimita el final o una interrupción de la cadena de llamadas asíncronas y operaciones de E / S vinculadas a un dominio.
8 	    domain.dispose()            Una vez que se ha llamado a dispose, el dominio ya no será utilizado por callbacks vinculados al dominio mediante run, bind o interceptar, y se emitirá un evento dispose.

Propiedades

S.No. 	Propiedad & Descripción
1 	    domain.members      Un array de temporizadores y emisores de eventos que se han agregado explícitamente al dominio.
*/

var EventEmitter = require("events").EventEmitter;
var domain = require("domain");

var emitter1 = new EventEmitter();

// Crear un dominio
var domain1 = domain.create();

domain1.on('error', function(err){
   console.log("domain1 handled this error ("+err.message+")");
});

// Se enlaza
domain1.add(emitter1);

emitter1.on('error',function(err){
   console.log("listener manejó este error ("+err.message+")");
});

emitter1.emit('error',new Error('Error para que lo maneje el listener'));

emitter1.removeAllListeners('error');

emitter1.emit('error',new Error('Error para que lo maneje domain1'));

var domain2 = domain.create();

domain2.on('error', function(err){
   console.log("domain2 manejó este error ("+err.message+")");
});

// Se enlaza implicitamente
domain2.run(function(){
   var emitter2 = new EventEmitter();
   emitter2.emit('error',new Error('Error para que lo maneje domain2'));   
});


domain1.remove(emitter1);
emitter1.emit('error', new Error('Convertido a excepción. El sistema fallará'));