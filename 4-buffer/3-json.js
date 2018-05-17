//Convertir buffer a JSON

var buff = new Buffer('Texto Simple');
var json = buff.toJSON(buff);

console.log(json);