var express = require('express');
var app = express();

// Responde con una petición GET en la página inicial raíz
app.get('/', function (req, res) {
   console.log("GET request en la principal /");
   res.send('Hola GET');
})

// Responde a una petición POST
app.post('/', function (req, res) {
   console.log("POST request en la principal /");
   res.send('Hola POST');
})

// Responde a una petición DELETE en la ruta /del_user
app.delete('/del_user', function (req, res) {
   console.log("DELETE request en /del_user");
   res.send('Hola DELETE');
})

// Responde a una petición GET en la ruta /list_user
app.get('/list_user', function (req, res) {
   console.log("GET request en /list_user");
   res.send('Página de listado de usuarios');
})

// Responde a una petición GET en la ruta abcd, abxcd, ab123cd, que cumplan con el patrón regex
app.get('/ab*cd', function(req, res) {   
   console.log("GET request en /ab*cd");
   res.send('El patrón coincide');
})

var server = app.listen(8081, function () {

   var host = server.address().address
   var port = server.address().port

   console.log("Ejemplo de app corriendo en http://%s:%s", host, port)
})