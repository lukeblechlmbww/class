var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<H1>Hello</H1> Express');
});

app.get('/me', function(req, res) {
  res.send('@planetoftheweb');
});
