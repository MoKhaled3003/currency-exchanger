var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const socketIo = require('socket.io');
require('dotenv').config()
var cors = require ('cors')
const RatesController = require('./controllers/rates.controller');
module.exports = function(app,server){
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//connect to mongoDB
require('./models/mongoose')();
let io = socketIo(server,{
  cors: {
    origin: "*"
  }
});
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})
app.use(cors());
// call get rates API every specific interval set by env variable 
setInterval(RatesController,process.env.RATES_API_INTERVAL,io);
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
}