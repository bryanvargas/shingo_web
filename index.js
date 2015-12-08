// var express = require('express');
// var app = express();
//
// app.use(express.static(__dirname, + '/views'));
// app.use(express.static(__dirname, +'/public'));
//
// app.get('/', function (peticion, respuesta) {
//     respuesta.sendFile('views/index.html');
// });
//
// app.listen(8888, function () {
//     console.log("Escuchando puerto en http://127.0.0.1:8888");
// });
var express = require('express');

var app = express();
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', function (peticion, respuesta) {
    respuesta.sendFile('views/index.html');
});

app.get('/about', function (peticion, respuesta) {
    respuesta.sendFile('views/about.html');
});
app.listen(8888, function () {
    console.log("Escuchando en el puerto http://127.0.0.1:8888");
});
