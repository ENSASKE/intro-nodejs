// DNS busquedas y resolución de nombres

/*
Métodos
S.No. 	Métodos y Descripción
1 	    dns.lookup(hostname[, options], callback)   Resuelve un nombre de host (por ejemplo, 'google.com') en el primer registro encontrado A (IPv4) o AAAA (IPv6). las opciones pueden ser un objeto o un número entero. Si no se proporcionan opciones, las direcciones IP v4 y v6 son ambas válidas. Si las opciones son un número entero, entonces debe ser 4 o 6.
2 	    dns.lookupService(address, port, callback)  Resuelve la dirección y el puerto dados en un nombre de host y servicio utilizando getnameinfo.
3 	    dns.resolve(hostname[, rrtype], callback)   Resuelve un nombre de host (por ejemplo, 'google.com') en un array de los tipos de registro especificados por rrtype.
4 	    dns.resolve4(hostname, callback)            Lo mismo que dns.resolve(), pero solo para consultas IPv4 (registros A). Direcciones es un array de direcciones IPv4 (por ejemplo ['74.125.79.104', '74.125.79.105', '74.125.79.106']).
5 	    dns.resolve6(hostname, callback)            Lo mismo que dns.resolve4() excepto para consultas IPv6 (una consulta AAAA).
6 	    dns.resolveMx(hostname, callback)           Lo mismo que dns.resolve(), pero solo para las consultas de intercambio de correo (registros MX).
7 	    dns.resolveTxt(hostname, callback)          Lo mismo que dns.resolve(), pero solo para consultas de texto (registros TXT). Direcciones es un array de 2D de los registros de texto disponibles para el nombre de host (por ejemplo, [['v = spf1 ip4: 0.0.0.0', '~all']]). Cada sub-array contiene trozos TXT de un registro. Según el caso de uso, podrían unirse o tratarse por separado.
8 	    dns.resolveSrv(hostname, callback)          Lo mismo que dns.resolve(), pero solo para registros de servicio (registros SRV). Direcciones es un array de los registros SRV disponibles para el nombre de host. Las propiedades de los registros SRV son prioridad, peso, puerto y nombre (por ejemplo, [{'priority': 10, 'weight': 5, 'port': 21223, 'name': 'service.example.com'},. ..]).
9 	    dns.resolveSoa(hostname, callback)          Lo mismo que dns.resolve(), pero solo para el inicio de las consultas de registros de autoridad (registro SOA).
10 	    dns.resolveNs(hostname, callback)           Lo mismo que dns.resolve(), pero solo para los registros del servidor de nombres (registros NS). Direcciones es un array de los registros del servidor de nombres disponibles para el nombre de host (por ejemplo, ['ns1.example.com', 'ns2.example.com']).
11 	    dns.resolveCname(hostname, callback)        Lo mismo que dns.resolve(), pero solo para registros de nombres canónicos (registros CNAME). Direcciones es un array de los registros de nombres canónicos disponibles para el nombre de host (por ejemplo, ['bar.example.com']).
12 	    dns.reverse(ip, callback)                   Resuelve una dirección IP a un array de nombres de host.
13 	    dns.getServers()                            Devuelve un array de direcciones IP como cadenas que se están utilizando actualmente para la resolución.
14 	    dns.setServers(servers)                     Dada un array de direcciones IP como cadenas, configúrelas como los servidores que se usarán para resolver.
*/

/*
rrtypes

Lista de los rrtypes válido usados por dns.resolve()

    A       − Direcciones IPV4, por defecto
    AAAA    − Direcciones IPV6
    MX      − registros de intercambio de correo
    TXT     − registros de texto
    SRV     − Registros SRV
    PTR     − utilizado para búsquedas inversas de IP
    NS      − registros del servidor de nombres
    CNAME   − registros de nombres canónicos
    SOA     − inicio del registro de autoridad

Códigos de error

Each DNS query can return one of the following error codes −

    dns.NODATA                  − El servidor DNS devolvió la respuesta sin datos.
    dns.FORMERR                 − La consulta de reclamos del servidor DNS no se formateó correctamente.
    dns.SERVFAIL                − El servidor DNS devolvió una falla general.
    dns.NOTFOUND                − Nombre de dominio no encontrado.
    dns.NOTIMP                  − El servidor DNS no implementa la operación solicitada.
    dns.REFUSED                 − El servidor DNS rechazó la consulta.
    dns.BADQUERY                − Consulta DNS mal formateada.
    dns.BADNAME                 − Nombre de host mal formateado.
    dns.BADFAMILY               − Familia de direcciones no admitidas.
    dns.BADRESP                 − Respuesta DNS mal formateada.
    dns.CONNREFUSED             − No se pudo contactar con los servidores DNS.
    dns.TIMEOUT                 − Tiempo de espera al ponerse en contacto con los servidores DNS.
    dns.EOF                     − Fin del documento.
    dns.FILE                    − Error al leer el archivo.
    dns.NOMEM                   − Sin memoria.
    dns.DESTRUCTION             − El canal está siendo destruido.
    dns.BADSTR                  − Cadena malformada.
    dns.BADFLAGS                − Banderas ilegales especificadas
    dns.NONAME                  − El nombre de host dado no es numérico.
    dns.BADHINTS                − Señales ilegales banderas especificadas.
    dns.NOTINITIALIZED          − Aún no se ha realizado la inicialización de la biblioteca c-ares.
    dns.LOADIPHLPAPI            − Error al cargar iphlpapi.dll.
    dns.ADDRGETNETWORKPARAMS    − No se pudo encontrar la función GetNetworkParams.
    dns.CANCELLED               − Consulta DNS cancelada
*/

var dns = require('dns');

dns.lookup('www.google.com', function onLookup(err, address, family) {
   console.log('dirección:', address);
   dns.reverse(address, function (err, hostnames) {
      if (err) {
         console.log(err.stack);
      }

      console.log('reversado para ' + address + ': ' + JSON.stringify(hostnames));
   });  
});