// sistema operativo

/*
Métodos

S.No. 	Método y Descripción
1 	    os.tmpdir()                 Devuelve el directorio predeterminado del sistema operativo para archivos temporales.
2 	    os.endianness()             Devuelve la endianidad de la CPU. Los valores posibles son "BE" o "LE".
3 	    os.hostname()               Devuelve el nombre de host del sistema operativo.
4 	    os.type()                   Devuelve el nombre del sistema operativo.
5 	    os.platform()               Devuelve la plataforma del sistema operativo.
6 	    os.arch()                   Devuelve la arquitectura de CPU del sistema operativo. Los valores posibles son "x64", "arm" y "ia32".
7 	    os.release()                Devuelve la versión del sistema operativo.
8 	    os.uptime()                 Devuelve el tiempo de actividad del sistema en segundos.
9 	    os.loadavg()                Devuelve una matriz que contiene los promedios de carga de 1, 5 y 15 minutos.
10 	    os.totalmem()               Devuelve la cantidad total de memoria del sistema en bytes.
11 	    os.freemem()                Devuelve la cantidad de memoria libre del sistema en bytes.
12 	    os.cpus()                   Devuelve una matriz de objetos que contiene información sobre cada CPU / núcleo instalado: modelo, velocidad (en MHz) y tiempos (un objeto que contiene la cantidad de milisegundos que la CPU / núcleo usado en: user, nice, sys, idle, irq).
13 	    os.networkInterfaces()      Obtenga una lista de interfaces de red.
*/

/*
Propiedades

S.No. 	Propiedad y Descripción
1 	    os.EOL      Una constante que define el marcador de final de línea apropiado para el sistema operativo.
*/

var os = require("os");

// Endianness
console.log('endianness: ' + os.endianness());

// Tipo de SO
console.log('type: ' + os.type());

// Plataforma de SO
console.log('platform: ' + os.platform());

// Memoria total del sistema
console.log('total memory: ' + os.totalmem() + " bytes.");

// Memoria libre del sistema
console.log('free memory: ' + os.freemem() + " bytes.");