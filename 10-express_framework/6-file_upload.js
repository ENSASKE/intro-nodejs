// subir archivos manualmente
// tambien se puede usar un paquete mas sencillo https://www.npmjs.com/package/express-fileupload

var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

//app.use(multer({ dest: 'file_upload_folder'}));//errado anterior
//nuevo
// 1 solo archivo usar "single" y abajo "req.file"
//app.use(multer({dest:'file_upload_folder'}).single('input_archivo'));
// varios archivos usar "array" y abajo "req.files"
app.use(multer({dest:'file_upload_folder'}).array('input_archivo',1));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/" + "formulario_archivo.htm" );
})

app.get('/formulario_archivo.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "formulario_archivo.htm" );
})

app.post('/file_upload', function (req, res) {  
   var tempRuta = req.files[0].path;
   var nombreTemporal = req.files[0].filename;
   var nombreOriginal = req.files[0].originalname;
    
   fs.readFile(tempRuta, function (err, data) {
      fs.writeFile("file_upload_folder/" + nombreOriginal, data, function (err) {
         if( err ){
            console.log( err );
            response = { msj: "error" };
        }else{
            response = {
                msj:'Archivo subido correctamente',
                nombreOriginal:nombreOriginal,
                nombreTemporal:nombreTemporal
            };

            //borramos el temporal
            fs.unlink(tempRuta, function(err) {
                if (err) {
                    console.log( err );
                }
            });
            
        }
         console.log( response );
         res.end( JSON.stringify( response ) );
      });
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Ejemplo de app corriendo en http://%s:%s", host, port)
})