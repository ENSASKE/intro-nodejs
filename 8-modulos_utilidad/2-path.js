// rutas de archivos

/*
S.No. 	Métodos y Descripción
1 	    path.normalize(p)                       Normaliza una ruta de cadena, teniendo cuidado de '..' y '.'.
2 	    path.join([path1][, path2][, ...])      Une todos los argumentos y normaliza la ruta resultante.
3 	    path.resolve([from ...], to)            Resuelve a un camino absoluto.
4 	    path.isAbsolute(path)                   Determina si la ruta es una ruta absoluta. Una ruta absoluta siempre se resolverá en la misma ubicación, independientemente del directorio de trabajo.
5 	    path.relative(from, to)                 Resuelve la ruta relativa de from to to.
6 	    path.dirname(p)                         Devuelve el nombre del directorio de una ruta. Similar al comando dirname de Unix.
7 	    path.basename(p[, ext])                 Devuelve la última porción de un camino. Similar al comando basename de Unix.
8 	    path.extname(p)                         Devuelve la extensión del camino, desde el último '.' al final de la cadena en la última parte de la ruta. Si no hay '.' en la última parte de la ruta o el primer carácter de la misma es '.', luego devuelve una cadena vacía.
9 	    path.parse(pathString)                  Devuelve un objeto de una cadena de ruta.
10 	    path.format(pathObject)                 Devuelve una cadena de ruta de un objeto, lo contrario de path.parse.
*/

/*
Propiedades

S.No. 	Propiedad y Descripción
1 	    path.sep            El separador de archivos específico de la plataforma. '\\' o '/'.
2 	    path.delimiter      El delimitador de ruta específico de la plataforma ';' o ':'.
3 	    path.posix          Proporciona acceso a los métodos de ruta mencionados anteriormente, pero siempre interactúe de una manera compatible con posix.
4 	    path.win32          Proporciona acceso a los métodos de ruta mencionados anteriormente, pero siempre interactúe de una manera compatible con win32.
*/

var path = require("path");

// Normalización
console.log('normalization : ' + path.normalize('/test/test1//2slashes/1slash/tab/..'));

// Unión
console.log('joint path : ' + path.join('/test', 'test1', '2slashes/1slash', 'tab', '..'));

// Resuelve
console.log('resolve : ' + path.resolve('no_existe.js'));

// Extensión
console.log('ext name : ' + path.extname('no_existe.js'));