// Node.js corre en modo "single-thread", pero usa eventos para manejar concurrencias. 
// Facilita la creción de procesos hijos para usar procesos en paralelo en sistemas con cpu multi-nucleos

/*
Método exec()

child_process.exec corre comandos en shell y luego muestra la respuesta/salida

child_process.exec(command[, options], callback)

Parámetros

    command (String) El comando para ejecutar, con parámetros separados por espacios

    options (Object) puede comprender una o más de las siguientes opciones:
        cwd (String)            Directorio de trabajo actual del proceso hijo
        env (Object)            Pares clave-valor de entorno
        encoding (String)       (Default: 'utf8')
        shell (String)          Shell para ejecutar el comando con (Predeterminado: '/bin/sh' en UNIX, 'cmd.exe' en Windows, El shell debe comprender el modificador -c en UNIX o /s /c en Windows. En Windows, análisis de línea de comandos debería ser compatible con cmd.exe.)
        timeout (Number)        (Default: 0)
        maxBuffer (Number)      (Default: 200*1024)
        killSignal (String)     (Default: 'SIGTERM')
        uid (Number)            Establece la identidad del usuario del proceso.
        gid (Number)            Establece la identidad del grupo del proceso.

    callback La función usa tres parámetros error, stdout, y stderr, será llamado con la salida cuando el proceso finaliza.


El método exec() devuelve un búfer con un tamaño máximo y espera a que el proceso finalice e intenta devolver todos los datos almacenados en búfer a la vez.
*/

const fs = require('fs');
const child_process = require('child_process');

for(var i=1; i<=3; i++) {
   var workerProcess = child_process.exec('node mensaje.js '+i,function 
      (error, stdout, stderr) {
      
      if (error) {
         console.log(error.stack);
         console.log('Error code: '+error.code);
         console.log('Signal received: '+error.signal);
      }
      console.log('stdout: ' + stdout);
      console.log('stderr: ' + stderr);
   });

   workerProcess.on('exit', function (code) {
      console.log('Proceso hijo finalizado con código: '+code);
   });
}