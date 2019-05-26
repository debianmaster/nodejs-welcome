var express = require('express');
var os = require("os");
var cors = require('cors');
const PORT = 8080;
const app = express();
console.log(process.env)

var healthy=true;


app.get('/', function (req, res) {
  res.send('Hello world v.1.19 ' + os.hostname() + '\n');
});



app.get('/healthz', function (req, res) {
  console.log('health enquiry')
  if(healthy)
   res.send('OK');
  else
   res.status(404).send('NOT OK');
});


app.get('/cancer', function (req, res) {
   healthy=false;
   res.send('Killed ' + os.hostname());
});



app.listen(PORT,'0.0.0.0');
console.log('Running on http://localhost:' + PORT);


process.on('SIGTERM', function () {
    console.log('Cleanup.....');
    process.exit();
});

