var express = require('express');
var http = require('http');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cons = require('consolidate');
var expressHbs = require('express-handlebars');
var mongoose = require('mongoose');


var index = require('./routes/index');
//var users = require('./routes/users');

var app = express();

//mongoose.connect('localhost:27017/ezcomdb_master');
//mongoose.connect('mongodb://bigdatadb:JlcX7j3VBNZl8d0BUYQW0Q9gSKD9SW0PgMQ13MsrpAApSWh6kzlgUDwILKbBeNR8l451KWKu1FKHpn8vQ4HKiw==@bigdatadb.documents.azure.com:10250/ezcomdb_master/?ssl=true');
mongoose.connect('mongodb://bigdatadb:JlcX7j3VBNZl8d0BUYQW0Q9gSKD9SW0PgMQ13MsrpAApSWh6kzlgUDwILKbBeNR8l451KWKu1FKHpn8vQ4HKiw==@bigdatadb.documents.azure.com:10250/ezcomdb_master/?ssl=true');

// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');

// // view engine setup
// app.engine('hbs', cons.handlebars);
// app.set('view engine', 'hbs');
 app.set('views', path.join(__dirname, 'views'));

// app.get('/', function(res, res) {
//   res.render('index', {
//     title: 'EZCOM e-Commerce',
//     author: {name: 'Birupakhya', age:29},
//     message: 'This is a test. Yes, just a test.'
//   });
// });
//console.log('Express server listening on port ' + app.get('port'));

app.set('port', 3000);
console.log('Express server listening on port ' + app.get('port'));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/', index);
//app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
