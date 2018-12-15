const express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan'); // logs http requests
var bodyParser = require('body-parser');
var config = require('./config/config')
var cors = require('cors');

// instanciate the express object.
var app = express()
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//set view engine

// map paths to routes

//create static routes. These directories contain static assets (CSS, javacript's)
//app.use(express.static(path.join(__dirname, 'public')));

//creates a log of server requests 
app.use(logger('dev'));

app.post('/', function(req,res){
  if (req.body) {
    //console.log("request object   :", req.body)
    res.send("just a string")
  }else{
    //console.log(req)
    res.send("no joy")
  }
});
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
          title: 'Error',
          message: err.message,
          error: err.status
      });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
      message: err.message,
      error: {}
  });
});

// see config/config where you can set these variables. 
const server = app.listen(config.server.port, () => {
  console.log(`Express running → PORT ${server.address().port}`);
});

