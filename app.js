var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/contactlist");

require('./models/seeds/personSeeds');


var indexController = require('./controllers/index.js');
var personController = require('./controllers/personctrl.js');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// index page
app.get('/', indexController.index);

// contactlist - display all data in database
app.get('/contactlist', indexController.viewAll);

// contactlist - add
app.post('/contactlist', personController.add);

// contactlist w id - delete 
app.delete('/contactlist/:id', personController.delete);

// contactlist w id - update
app.get('/contactlist/:id', personController.view);
app.put('/contactlist/:id', personController.update);

var server = app.listen(9873, function() {
	console.log('Express server listening on port ' + server.address().port);
});
