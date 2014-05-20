var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<H1>Hello</H1> Express');
});

app.get('/me', function(req, res) {
  res.send('@planetoftheweb');
});

app.get('/luke', function(req, res) {
  res.send('Yo Yo Brahj!');
});

var server = app.listen(3000, function() {
  console.log('Listening on port 3000');
});
