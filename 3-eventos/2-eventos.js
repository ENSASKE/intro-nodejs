//Creacion de eventos, remover eventos

var events = require('events');
var eventEmitter = new events.EventEmitter();

// función "listener1"
var listner1 = function listner1() {
   console.log('listner1 executed.');
}

// función "listener2"
var listner2 = function listner2() {
  console.log('listner2 executed.');
}

// Enlaza el evento "connection" con la función "listner1"
eventEmitter.addListener('connection', listner1);

// Enlaza el evento "connection" con la función "listner2"
eventEmitter.on('connection', listner2);

var eventListeners = require('events').EventEmitter.listenerCount
   (eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

// Dispara el evento "connection"
eventEmitter.emit('connection');

// Remueve el enlace de la función "listner1" con el evento "connection"
eventEmitter.removeListener('connection', listner1);
console.log("Listner1 no funcionará ahora.");

// Dispara el evento "connection"
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log("Existe "+ eventListeners + " Listner(s) enlazados al evento 'connection'");

console.log("FINALIZADO");