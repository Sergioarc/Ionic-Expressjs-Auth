var express = require('express');
var body_parser = require ('body-parser');
var mongoose = require('mongoose');
var jwt    = require('jsonwebtoken');

//Inicialiazar express
var app = express(); 

//var User = require('./modelo/users')
//var config = require('./config')

//Configuración

//app.set('superSecret', config.phrase); // setear frase secreta
//mongoose.connect(config.database); // conectar a MongoDB
//app.use(body_parser.urlencoded({ extended: false }));
//app.use(body_parser.json());

//Configuracion de las vistas
app.use("/css",express["static"]("" + __dirname + "/public/www/css"));
app.use("/js",express["static"]("" + __dirname + "/public/www/js"));
app.use("/img",express["static"]("" + __dirname + "/public/www/img"));
app.use("/lib",express["static"]("" + __dirname + "/public/www/lib"));
app.use("/templates",express["static"]("" + __dirname + "/public/www/templates"));

// RUTAS de la API
var router = express.Router();

// Registrar las rutas con prefijo /api
app.use('/AuthIonic', router);

// // ruta para probar nuestro servidor
router.get('/', function(req, res){
	console.log("Inicio");
    res.sendfile('./public/www/index.html');
});

// //ruta de registro de usuarios
// router.route('/register').post(function(req, res){
// 	console.log("Registro");
// 	res.sendfile('./public/www/pageRegister.html')
// });

// //Crear un nuevo usuario
// router.post('/register',function(req, res, next){
// 	new User({
// 		nombre: req.body.name,
		
// 	})

// });

//Escuhe en el puerto
app.listen(3000);
//console.log("Escuchando en el Puerto: " + port)


/* Otra sintataxis para levantar el servidor en el puerto 4000
var server = app.listen(4000, function () {
	var host = server.address().address;
  	var port = server.address().port;

  	console.log('Example app listening at http://%s:%s', host, port);
});
*/

