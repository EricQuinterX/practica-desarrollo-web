var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req, res){
  res.send('Hello World!!!');
});

app.listen(3000, function(){
  console.log('Running on port 3000');
});
