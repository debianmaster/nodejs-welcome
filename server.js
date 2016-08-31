'use strict';

const express = require('express');
var os = require("os");
// Constants
const PORT = 8080;

// App
const app = express();
app.get('/', function (req, res) {
  res.send('Hello world ' + os.hostname());
});

app.listen(process.env.OPENSHIFT_NODEJS_PORT,process.env.OPENSHIFT_NODEJS_IP);
console.log('Running on http://localhost:' + PORT);
