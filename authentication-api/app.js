var createError = require('http-errors');
var express = require('express');
var path = require('path');
require('dotenv').config()
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose=require("mongoose")
const cors=require("cors")
var ejwt = require("express-jwt").expressjwt;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter = require('./routes/products');
var ordersRouter = require('./routes/orders');
var categoriesRouter = require('./routes/categories');
var coupensRouter = require('./routes/coupens');
var bannersRouter = require('./routes/banners');
var roleRouter = require('./routes/role');
const JWT_SECRET = process.env.JWT_SECRET

var app = express();
mongoose.connect(process.env.MONGOURL).then((res) => {
  console.log('Db Connected');

}).catch((error) => {
  console.log(error);

})


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static('uploads'))

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);
app.use('/categories', categoriesRouter);
app.use('/coupens', coupensRouter);
app.use('/banners', bannersRouter);
app.use('/role', roleRouter);

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
