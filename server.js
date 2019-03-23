var express = require('express');
var app = express();
var server = require('path');
var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, functio() {
  console.log("== Server is listening on port" + port);
});
