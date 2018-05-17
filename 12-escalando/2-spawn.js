/*
El método spawn()

child_process.spawn Lanza un nuevo proceso con el comando dado.

child_process.spawn(command[, args][, options])

Parámetros

    command (String)    El comando a ejecutar

    args (Array)        Lista de strings como parámetros

    options (Object) puede comprender una o más de las siguientes opciones:
        cwd (String)            Directorio de trabajo actual del proceso hijo.
        env (Object)            Pares clave-valor del entorno.
        stdio (Array)           Configuración stdio de String Child.
        customFds (Array)       Descriptores de archivos obsoletos (Deprecated) para que el hijo los use para stdio.
        detached (Boolean)      El hijo será un líder del grupo de proceso.
        uid (Number)            Establece la identidad del usuario del proceso.
        gid (Number)            Establece la identidad del grupo del proceso.


El método spawn () devuelve flujos (stdout y stderr) y debe usarse cuando el proceso devuelve un gran volumen de datos. spawn() comienza a recibir la respuesta tan pronto como el proceso comienza a ejecutarse.
*/

const fs = require('fs');
const child_process = require('child_process');
 
for(var i = 1; i<=3; i++) {
   var workerProcess = child_process.spawn('node', ['mensaje.js', i]);

   workerProcess.stdout.on('data', function (data) {
      console.log('stdout: ' + data);
   });

   workerProcess.stderr.on('data', function (data) {
      console.log('stderr: ' + data);
   });

   workerProcess.on('close', function (code) {
      console.log('Proceso hijo finalizado con código: ' + code);
   });
}