/*
El método fork()

child_process.fork Es un método especial derivado del spawn() para crear procesos de Node.

child_process.fork(modulePath[, args][, options])

Parámetros

    modulePath (String) The module to run in the child.

    args (Array) List of string arguments

    options (Object) puede comprender una o más de las siguientes opciones:
        cwd (String)            Directorio de trabajo actual del proceso hijo.
        env (Object)            Pares clave-valor del entorno.
        execPath (String)       Ejecutable utilizado para crear el proceso hijo.
        execArgv (Array)        Lista de parámetros de cadena pasados al ejecutable (Predeterminado: process.execArgv).
        silent (Boolean)        Si es verdadero, stdin, stdout y stderr del hijo serán canalizados al padre, de lo contrario serán heredados del padre, vea las opciones "pipe" y "inherit" para el stdio de spawn() para más detalles (por defecto Es falso).
        uid (Number)            Establece la identidad del usuario del proceso.
        gid (Number)            Establece la identidad del grupo del proceso.

El método fork devuelve un objeto con un canal de comunicación incorporado además de tener todos los métodos en una instancia normal de ChildProcess.
*/

const fs = require('fs');
const child_process = require('child_process');
 
for(var i=1; i<=3; i++) {
   var worker_process = child_process.fork("mensaje.js", [i]);	

   worker_process.on('close', function (code) {
      console.log('Proceso hijo finalizado con código:  ' + code);
   });
}