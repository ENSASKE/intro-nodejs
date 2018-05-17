//Este ejemplo demuestra los callbacks y la emision ejecucion de eventos

// Importamos el módulo de eventos "events"
var events = require('events');

// Creamos un objeto "eventEmitter"
var eventEmitter = new events.EventEmitter();

// Creamos un manejador de eventos
var connectHandler = function connected() {
   console.log('conexion completada.');
  
   // Dispara el evento "data_received"
   eventEmitter.emit('data_received');
}

// Enlaza el evento "connection" con el manejador
eventEmitter.on('connection', connectHandler);
 
// Enlaza el evento "data_received" con una función anonima
eventEmitter.on('data_received', function(){
   console.log('datos recibidos.');
});

// Dispara el evento "connection"
eventEmitter.emit('connection');

console.log("FINALIZADO");