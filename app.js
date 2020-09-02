/*
 *	this code si just default server express
 * */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter  = require('./routes/api')
/*need for body parser */
/* for route api GFW */
var apiGfwRouter = require('./gfw-api/routes/api')
var bodyParser = require('body-parser')

var app = express();

/* Variable swagger */
var swaggerUi = require('swagger-ui-express'),
    swaggerGfwDocument = require('./gfw-api/swagger.json');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname,  "react-app/build")));
app.use(express.static("public"));

app.use('/users', usersRouter);
app.use('/gfw-api-docs', swaggerUi.serve, swaggerUi.setup(swaggerGfwDocument));
app.use('/', indexRouter);
app.use('/gfw-api/v1', apiGfwRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
