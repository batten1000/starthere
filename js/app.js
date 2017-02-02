var express = require('express');
var app = express();

app.get('/', function(req,res){
	res.send('OK');
});


//in order to make app testable we want our app def in one file and the code that binds app to network to be in other file
/*app.listen(8000, function(){
	console.log('Listening on 8000');
});*/

module.export = app;

