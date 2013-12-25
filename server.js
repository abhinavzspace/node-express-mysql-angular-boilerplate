
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var swig = require('swig');

var app = express();


// create connection to database and filter it to the controllers through routes
var mysql = require('mysql');
var pool  = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'mcdonalds',
    database: 'test'
});
app.use(function (req, res, next) {
    req.pool = pool;
    next();
});

// all environments
//app.set('port', process.env.PORT || 3000);
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, '/app/views'));
app.set('view engine', 'html');

// disable swig cache permanently and enable express cache when going in production
app.set('view cache', false);
swig.setDefaults({ cache: false });



app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// routes
require('./config/routes')(app);

var config = require('./config/config')();
http.createServer(app).listen(config.port, function(){
  console.log('Express server listening on port ' + config.port);
});
