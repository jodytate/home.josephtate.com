var express = require('express');

var app = express();

var www = express.static(__dirname + '/');

app.use('/', www);

app.listen(8888);
console.log('Running website at localhost:8888');
