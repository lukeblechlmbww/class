var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<H1>Hello</H1> Express');
});

app.get('/me', function(req, res) {
  res.send('@planetoftheweb');
});

app.get('who/:name?', function(req, res) {
	var name = req.params.name;
	res.send(name + ' was here');
});

ap.get('/who/:name?/:title?', function(req, res) {
	var name = requ.params.name;
	var title = req.params.title;
	res.send('<p>name: ' + name + '<br>title: ' + title + '</p>');
});

app.get('*', function(req, res) {
	res.send('Bad Route');
});

app.get('/luke', function(req, res) {
  res.send('Yo Yo Brahj!');
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});
