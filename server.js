var express = require('express');
var os = require("os");
// Constants
const PORT = 8080;
var healthy=true;
// App
const app = express();

app.get('/', function (req, res) {
  res.send('Hello world ' + os.hostname());
});

app.get('/healthz', function (req, res) {
  if(healthy)
   res.send('OK');
  else
   res.status(404).send('NOT OK');
});

app.get('/cancer', function (req, res) {
   healthy=false;
   res.send('DONE');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
