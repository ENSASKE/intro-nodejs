// propiedades de procesos

/*
Process Properties
El proceso proporciona muchas propiedades útiles para tener un mejor control sobre las interacciones del sistema.

S.No.	Propiedad y Descripción
1	    stdout          Un flujo de escritura para stdout.
2	    stderr          Un flujo de escritura para  stderr.
3	    stdin           Un flujo de escritura para  stdin.
4	    argv            Un array que contiene los argumentos de la línea de comando. El primer elemento será 'nodo', el segundo elemento será el nombre del archivo JavaScript. Los siguientes elementos serán cualquier argumento de línea de comando adicional.
5	    execPath        Esta es la ruta de acceso absoluta del ejecutable que inició el proceso.
6	    execArgv        Este es el conjunto de opciones de línea de comando específicas del nodo desde el ejecutable que inició el proceso.
7	    env             Un objeto que contiene el entorno del usuario.
8	    exitCode        Un número que será el código de salida del proceso, cuando el proceso salga con gracia o salga por process.exit() sin especificar un código.
9	    version         Una propiedad compilada que expone NODE_VERSION.
10	    versions        Una propiedad que expone las cadenas de versión de nodo y sus dependencias.
11	    config          Un objeto que contiene la representación de JavaScript de las opciones de configuración que se utilizaron para compilar el ejecutable del nodo actual. Esto es lo mismo que el archivo "config.gypi" que se produjo al ejecutar el script ./configure.
12	    pid             El PID del proceso.
13	    title           Getter/setter para establecer lo que se muestra en 'ps'.
14	    arch            En qué arquitectura de procesador se está ejecutando: 'arm', 'ia32' o 'x64'.
15	    platform        En qué plataforma se está ejecutando: 'darwin', 'freebsd', 'linux', 'sunos' o 'win32'
16	    mainModule      Manera alternativa de recuperar require.main. La diferencia es que si el módulo principal cambia en el tiempo de ejecución, require.main aún podría referirse al módulo principal original en los módulos que se requerían antes de que se produjera el cambio. En general, es seguro asumir que los dos se refieren al mismo módulo.
*/

// Imprimiendo en consola
process.stdout.write("Hola Mundo" + "\n");

// Leyendo parametro pasado
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// Obteniendo ruta ejecutable
console.log(process.execPath);

// Información de la plataforma
console.log(process.platform);