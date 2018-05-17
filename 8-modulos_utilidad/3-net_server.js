// conexion de redes cliente - servidor

/*
Métodos
S.No. 	Métodos y Descripción
1 	    net.createServer([options][, connectionListener])       Crea un nuevo servidor TCP. El parámetro connectionListener se establece automáticamente como un escucha para el evento 'connection'.
2 	    net.connect(options[, connectionListener])              Un método de fábrica, que devuelve un nuevo 'net.Socket' y se conecta a la dirección y puerto suministrados.
3 	    net.createConnection(options[, connectionListener])     Un método de fábrica, que devuelve un nuevo 'net.Socket' y se conecta a la dirección y puerto suministrados.
4 	    net.connect(port[, host][, connectListener])            Crea una conexión TCP al puerto en el host. Si se omite el host, se asumirá 'localhost'. El parámetro connectListener se agregará como un detector para el evento 'connect'. Es un método de fábrica que devuelve un nuevo 'net.Socket'.
5 	    net.createConnection(port[, host][, connectListener])   Crea una conexión TCP al puerto en el host. Si se omite el host, se asumirá 'localhost'. El parámetro connectListener se agregará como un detector para el evento 'connect'. Es un método de fábrica que devuelve un nuevo 'net.Socket'.
6 	    net.connect(path[, connectListener])                    Crea una conexión de socket Unix a la ruta. El parámetro connectListener se agregará como un detector para el evento 'connect'. Es un método de fábrica que devuelve un nuevo 'net.Socket'.
7 	    net.createConnection(path[, connectListener])           Crea una conexión de socket Unix a la ruta. El parámetro connectListener se agregará como un detector para el evento 'connect'. Es un método de fábrica que devuelve un nuevo 'net.Socket'.
8 	    net.isIP(input)                                         Prueba si la entrada es una dirección IP. Devuelve 0 para cadenas inválidas, 4 para direcciones IP versión 4 y 6 para direcciones IP versión 6.
9 	    net.isIPv4(input)                                       Devuelve verdadero si la entrada es una dirección IP de la versión 4; de lo contrario, devuelve falso.
10 	    net.isIPv6(input)                                       Devuelve verdadero si la entrada es una dirección IP de la versión 6; de lo contrario, devuelve falso.
*/

/*
Class - net.Server

Esta clase se usa para crear un TCP o servidor local.
Métodos
S.No. 	Métodos y Descripción
1 	    server.listen(port[, host][, backlog][, callback])  Comienza aceptando conexiones en el puerto y host especificados. Si se omite el host, el servidor aceptará conexiones dirigidas a cualquier dirección IPv4 (INADDR_ANY). Un valor de puerto de cero asignará un puerto aleatorio.
2 	    server.listen(path[, callback]                      Inicia un servidor de socket local para escuchar las conexiones en la ruta determinada.
3 	    server.listen(handle[, callback])                   El objeto de control se puede establecer en un servidor o socket (cualquier cosa con un miembro _handle subyacente) o un objeto {fd: <n>}. Hará que el servidor acepte conexiones en el identificador especificado, pero se supone que el descriptor o el manejador del archivo ya se ha vinculado a un puerto o socket de dominio. Escuchar en un descriptor de archivo no es compatible con Windows.
4 	    server.listen(options[, callback])                  Las propiedades de las opciones de puerto, host y backlog, así como callback opcional, se comportan como lo hacen en una llamada a server.listen (port, [host], [backlog], [callback]). Alternativamente, la opción de ruta se puede usar para especificar un socket UNIX.
5 	    server.close([callback])                            Finalmente se cierra cuando todas las conexiones se terminan y el servidor emite un evento 'cerrar'.
6 	    server.address()                                    Devuelve la dirección enlazada, el apellido de la dirección y el puerto del servidor según lo informado por el sistema operativo.
7 	    server.unref()                                      Llamar a unref en un servidor permitirá que el programa salga si este es el único servidor activo en el sistema de eventos. Si el servidor ya no está siendo reintegrado, llamar nuevamente a unref no tendrá ningún efecto.
8 	    server.ref()                                        Contrario de unref, la referencia de llamada en un servidor previamente no restituido no permitirá que el programa salga si es el único servidor que queda (el comportamiento predeterminado). Si el servidor es refd, llamar al ref nuevamente no tendrá efecto.
9 	    server.getConnections(callback                      Obtenga asincrónicamente el número de conexiones simultáneas en el servidor. Funciona cuando se enviaron sockets a los forks. El callback usa dos parámetros err y count.
*/

/*
Events
S.No. 	Eventos y Descripción
1 	    listening       Se emite cuando el servidor se ha vinculado después de llamar server.listen.
2 	    connection      Emitido cuando se realiza una nueva conexión. El objeto de conexión está disponible para el manejador de eventos. Socket es una instancia de net.Socket.
3 	    close           Emitido cuando el servidor se cierra. Tenga en cuenta que si existen conexiones, este evento no se emitirá hasta que finalicen todas las conexiones.
4 	    error           Emitido cuando ocurre un error. El evento 'close' se llamará directamente después de este evento.
*/

/*
Class - net.Socket

Este objeto es una abstracción de un TCP o un socket local. Instancias net.Socket implementan una interfaz dúplex Stream. Pueden ser creados por el usuario y utilizados como un cliente (con connect()) o pueden ser creados por Node y pasados al usuario a través del evento de 'connection' de un servidor.

Eventos
net.Socket es un eventEmitter y emite los siguientes eventos.
S.No. 	Eventos y Descripción
1 	lookup      Emitido después de resolver el nombre de host pero antes de conectarse. No aplicable a los sockets UNIX.
2 	connect     Se emite cuando se establece con éxito una conexión de socket.
3 	data        Emitido cuando se reciben datos. Los datos del parámetro serán un Buffer o String. La codificación de los datos se establece mediante socket.setEncoding().
4 	end         Se emite cuando el otro extremo del socket envía un paquete FIN.
5 	timeout     Se emite si el socket agota el tiempo de inactividad. Esto es solo para notificar que el socket ha estado inactivo. El usuario debe cerrar manualmente la conexión.
6 	drain       Se emite cuando el buffer de escritura se vacía. Se puede usar para acelerar las cargas.
7 	error       Emitido cuando ocurre un error. El evento 'close' se llamará directamente después de este evento.
8 	close       Emitido una vez que el socket está completamente cerrado. El parámetro had_error es un booleano que indica si el socket se cerró debido a un error de transmisión.
*/

/*
Propiedades

net.Socket proporciona muchas propiedades útiles para tener un mejor control sobre las interacciones del socket.

S.No. 	Propiedad y Descripción
1 	    socket.bufferSize       Esta propiedad muestra el número de caracteres actualmente almacenados en búfer para su escritura.
2 	    socket.remoteAddress    La representación de cadena de la dirección IP remota. Por ejemplo, '74.125.127.100' o '2001:4860:a005::68'.
3 	    socket.remoteFamily     La representación de cadena de la familia de IP remota. 'IPv4' o 'IPv6'.
4 	    socket.remotePort       La representación numérica del puerto remoto. Por ejemplo, 80 o 21.
5 	    socket.localAddress     La representación de cadena de la dirección IP local en la que se conecta el cliente remoto. Por ejemplo, si está escuchando en '0.0.0.0' y el cliente se conecta en '192.168.1.1', el valor sería '192.168.1.1'.
6 	    socket.localPort        La representación numérica del puerto local. Por ejemplo, 80 o 21.
7 	    socket.bytesRead        La cantidad de bytes recibidos.
8 	    socket.bytesWritten     La cantidad de bytes enviados.
*/

/*
Métodos
S.No. 	Métodos y Descripción
1 	    new net.Socket([options])                           Construye un nuevo objeto socket.
2 	    socket.connect(port[, host][, connectListener])     Abre la conexión para un socket dado. Si se proporcionan el puerto y el host, entonces el socket se abrirá como un socket TCP, si se omite el host, se asumirá localhost. Si se da una ruta, el socket se abrirá como un socket Unix para esa ruta.
3 	    socket.connect(path[, connectListener])             Abre la conexión para un socket dado. Si se proporcionan el puerto y el host, entonces el socket se abrirá como un socket TCP, si se omite el host, se asumirá localhost. Si se da una ruta, el socket se abrirá como un socket Unix para esa ruta.
4 	    socket.setEncoding([encoding])                      Establezca la codificación para el socket como un Flujo legible.
5 	    socket.write(data[, encoding][, callback])          Envía datos al socket. El segundo parámetro especifica la codificación en el caso de una cadena; su valor predeterminado es la codificación UTF8.
6 	    socket.end([data][, encoding])                      A medio cerrar el socket, es decir, si envía un paquete FIN. Es posible que el servidor aún envíe algunos datos.
7 	    socket.destroy()                                    Asegura que no ocurra más actividad de E/S en este socket. Necesario solo en caso de errores (error de análisis o SO).
8 	    socket.pause()                                      Pausa la lectura de datos. Es decir, los eventos de 'data' no se emitirán. Útil para acelerar una carga.
9 	    socket.resume()                                     Se reanuda la lectura después de llamar a pausa().
10 	    socket.setTimeout(timeout[, callback])              Establece un tiempo de espera del socket después de un tiempo de inactividad en milisegundos. Por defecto, net.Socket no tiene un tiempo de espera.
11 	    socket.setNoDelay([noDelay])                        Desactiva el algoritmo de Nagle. Por defecto, las conexiones TCP usan el algoritmo Nagle, almacenan los datos en búfer antes de enviarlos. Establecer true para noDelay activará inmediatamente los datos cada vez que se llame a socket.write(). noDelay se establece en true por defecto.
12 	    socket.setKeepAlive([enable][, initialDelay])       Habilite / deshabilite la funcionalidad keep-alive, y opcionalmente establezca el retraso inicial antes de que se envíe la primera sonda keepalive en un socket inactivo. Por defecto el valor es falso.
13 	    socket.address()                                    Devuelve la dirección enlazada, la familia de la dirección y el puerto del socket según lo informado por el sistema operativo. Devuelve un objeto con tres propiedades, p. Ej. {port: 12346, family: 'IPv4', address: '127.0.0.1'}.
14 	    socket.unref()                                      Llamar a unref en un socket permitirá que el programa salga si este es el único socket activo en el sistema de eventos. Si el socket ya no está retenido, entonces llamar a unref nuevamente no tendrá ningún efecto.
15 	    socket.ref()                                        Al contrario de unref, llamar a ref en un socket que no haya sido unrefd anteriormente no permitirá que el programa salga si es el único socket que queda (el comportamiento predeterminado). Si el socket es refd, entonces llamar a ref nuevamente no tendrá efecto.
*/

var net = require('net');
var server = net.createServer(function(connection) { 
   console.log('cliente conectado');
   
   connection.on('end', function() {
      console.log('cliente desconectado');
   });
   connection.write('Hola Mundo!\r\n');
   connection.pipe(connection);
});
server.listen(8080, function() { 
   console.log('El servidor está escuchando');
});