var express = require('express');
var os = require("os");
// Constants
const PORT = 8080;

// App
const app = express();

app.get('/', function (req, res) {
  res.send('Hello world ' + os.hostname());
});

app.get('/healthz', function (req, res) {
  res.send('OK');
});

app.get('/die', function (req, res) {
  res.status(404)
   .send('NOT OK');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
