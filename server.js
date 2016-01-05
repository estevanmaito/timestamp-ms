'use strict';

var express = require('express');
var routes = require('./app/routes/index.js');

var app = express();

var port = process.env.PORT || 5000;

routes(app);

app.listen(port, function() {
  console.log('Node app is running on port ', port);
});

// app.listen(3000, function() {
// 	console.log('Listening on port 3000...');
// });