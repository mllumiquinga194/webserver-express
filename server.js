const express = require('express')
const app = express(); //app es una variable producto de la funcion express
var hbs = require('hbs');
require('./hbs/helpers/helpers');

const port = process.env.PORT || 3000;



//los middleware se ejecutan siempre, sin importar que url la persona pida
//todos los archivos que esten en public van a ser servidos de forma statica, ahi podemos poder cualquier cantidad de archivos
//estos archivos van a ser de dominio publico y cualquier persona los podra ver
app.use(express.static(__dirname + '/public')); //para crear un middleware y especificar la carpeta publica


//express hbs engine
hbs.registerPartials(__dirname + '/views/partials');//para hacer la reutilizacion de codigo con hbs. todos mis parciales deben estar en esa carpeta
app.set('view engine', 'hbs');

//para renderizar a mi archivo hbs lo hago de la siguiente forma. UNO Para cada pagina
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'feRNAndo'
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.listen(port, () => {
    console.log(`escuchando en el puerto ${port}`);

});