// Procesos de eventos

/*
El objeto de proceso es una instancia de EventEmitter y emite los siguientes eventos

S.No.	Event & Description
1	    exit                Se emite cuando el proceso está a punto de finalizar. No hay forma de evitar la finalización del bucle de evento en este punto, y una vez que todos los oyentes de salida hayan terminado de ejecutarse, el proceso finalizará.
2	    beforeExit          Este evento se emite cuando el nodo vacía su bucle de evento y no tiene nada más que programar. Normalmente, el nodo sale cuando no hay trabajo programado, pero un oyente para 'beforeExit' puede hacer llamadas asíncronas y hacer que el nodo continúe.
3	    uncaughtException   Se emite cuando una excepción recorre todo el camino de vuelta al ciclo de eventos. Si se agrega un oyente para esta excepción, la acción predeterminada (que es imprimir un seguimiento de pila y salir) no ocurrirá.
4	    Signal Events       Se emite cuando los procesos reciben una señal como SIGINT, SIGHUP, etc.
*/

/*
Exit Codes

Node normalmente sale con un código de estado 0 cuando no hay más operaciones asíncronas pendientes. Hay otros códigos de salida que se describen a continuación:

Code	Nombre y Descripción
1	    Uncaught Fatal Exception                    Hubo una excepción no detectada, y no fue manejada por un dominio o un controlador de evento uncaughtException.
2	    Unused                                      Reservado por Bash para mal uso incorporado.
3	    Internal JavaScript Parse Error             El código fuente de JavaScript interno en el proceso de arranque de Node provocó un error de análisis. Esto es extremadamente raro, y generalmente solo puede ocurrir durante el desarrollo del Nodo.
4	    Internal JavaScript Evaluation Failure      El código fuente de JavaScript interno en el proceso de arranque de Node no pudo devolver un valor de función cuando se evaluó. Esto es extremadamente raro, y generalmente solo puede ocurrir durante el desarrollo de Node.
5	    Fatal Error                                 Hubo un error fatal irrecuperable en V8. Normalmente, un mensaje se imprimirá en stderr con el prefijo FATAL ERROR.
6	    Non-function Internal Exception Handler     Hubo una excepción no detectada, pero la función interna del controlador de excepción fatal se configuró de alguna manera como no funcional y no se pudo invocar.
7       Internal Exception Handler Run-Time Failure Hubo una excepción no detectada, y la función interna del controlador de excepción fatal arrojó un error al intentar manejarlo.
8	    Unused
9	    Invalid Argument                            Se especificó una opción desconocida o se proporcionó una opción que requiere un valor sin un valor.
10	    Internal JavaScript Run-Time Failure        El código fuente de JavaScript interno en el proceso de arranque de Node arrojó un error cuando se llamó a la función de arranque. Esto es extremadamente raro, y generalmente solo puede ocurrir durante el desarrollo de Node.
11	    Invalid Debug Argument                      Las opciones --debug y / o --debug-brk se establecieron, pero se eligió un número de puerto no válido.
>128	Signal Exits                                Si Node recibe una señal fatal como SIGKILL o SIGHUP, entonces su código de salida será 128 más el valor del código de señal. Esta es una práctica estándar de Unix, ya que los códigos de salida se definen como enteros de 7 bits, y las salidas de señal configuran el bit de orden alto, y luego contienen el valor del código de señal.
*/

process.on('exit', function(code) {

    // Este codigo nunca se ejecutará
    setTimeout(function() {
       console.log("no se ejecuta");
    }, 0);
   
    console.log('codigo de salida:', code);
 });
 console.log("FINALIZADO");