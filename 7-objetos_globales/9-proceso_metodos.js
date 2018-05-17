/*
Métodos del proceso

El proceso proporciona muchos métodos útiles para obtener un mejor control sobre las interacciones del sistema.

S.No	Method & Description
1	    abort()                             Hace que el nodo emita un aborto. Hace que el nodo salga y genere un archivo central.
2	    chdir(directory)                    Cambia el directorio de trabajo actual del proceso o lanza una excepción si falla.
3	    cwd()                               Devuelve el directorio de trabajo actual del proceso.
4	    exit([code])                        Finaliza el proceso con el código especificado. Si se omite, exit usa el código de 'éxito' 0.
5	    getgid()                            Obtiene la identidad del grupo del proceso. Esta es la ID del grupo numérico, no el nombre del grupo. Esta función solo está disponible en plataformas POSIX (es decir, no en Windows, Android).
6	    setgid(id)                          Establece la identidad del grupo del proceso. (Ver setgid (2)). Acepta una identificación numérica o una cadena de nombre de grupo. Si se especifica un nombre de grupo, este método se bloquea mientras se lo resuelve en una ID numérica. Esta función solo está disponible en plataformas POSIX (es decir, no en Windows, Android).
7	    getuid()                            Obtiene la identidad del usuario del proceso. Esta es la identificación numérica, no el nombre de usuario. Esta función solo está disponible en plataformas POSIX (es decir, no en Windows, Android).
8	    setuid(id)                          Establece la identidad del usuario del proceso (Ver setgid (2)). Acepta una identificación numérica o una cadena de nombre de usuario. Si se especifica un nombre de usuario, este método bloquea mientras lo resuelve en una ID numérica. Esta función solo está disponible en plataformas POSIX (es decir, no en Windows, Android).
9	    getgroups()                         Devuelve una matriz con los ID de grupo suplementarios. POSIX lo deja sin especificar si se incluye la identificación de grupo efectiva, pero node.js asegura que siempre lo está. Esta función solo está disponible en plataformas POSIX (es decir, no en Windows, Android).
10	    setgroups(groups)                   Establece los ID del grupo suplementario. Esta es una operación privilegiada, lo que implica que debe estar en la raíz o tener la capacidad CAP_SETGID. Esta función solo está disponible en plataformas POSIX (es decir, no en Windows, Android).
11	    initgroups(user, extra_group)       Lee / etc / group e inicializa la lista de acceso del grupo, utilizando todos los grupos de los que el usuario es miembro. Esta es una operación privilegiada, lo que implica que debe estar en la raíz o tener la capacidad CAP_SETGID. Esta función solo está disponible en plataformas POSIX (es decir, no en Windows, Android).
12	    kill(pid[, signal])                 Envía una señal a un proceso. pid es la identificación del proceso y la señal es la cadena que describe la señal a enviar. Los nombres de las señales son cadenas como 'SIGINT' o 'SIGHUP'. Si se omite, la señal será 'SIGTERM'.
13	    memoryUsage()                       Devuelve un objeto que describe el uso de memoria del proceso de nodo medido en bytes.
14	    nextTick(callback)                  Una vez que el ciclo de suceso actual gira hasta completarse, llame a la función de devolución de llamada.
15	    umask([mask])                       Establece o lee la máscara de creación de modo de archivo del proceso. Los procesos secundarios heredan la máscara del proceso principal. Devuelve la máscara anterior si se proporciona un argumento de máscara; de lo contrario, devuelve la máscara actual.
16	    uptime()                            Número de segundos que el nodo se ha estado ejecutando.
17	    hrtime()                            Devuelve el tiempo real de alta resolución actual en una matriz de tupla [segundos, nanosegundos]. Es relativo a un tiempo arbitrario en el pasado. No está relacionado con la hora del día y, por lo tanto, no está sujeto a la deriva del reloj. El uso principal es para medir el rendimiento entre intervalos.
*/

console.log('Carpeta actual: ' + process.cwd());

console.log('Versión actual: ' + process.version);

console.log(process.memoryUsage());