var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var boardRouter = require('./routes/board');
var Nrouter = require('./routes/notebook');
var Srouter = require('./routes/seclector');
var Notebook = require('./models/notebook');
var Res = require('./routes/resource');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
require('dotenv').config();
const connectionString =
process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
{useNewUrlParser: true,
useUnifiedTopology: true});
//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

//seeding
// We can seed the collection if needed on
async function recreateDB(){
// Delete everything
await Notebook.deleteMany();
//instance1
let instance1 = new
Notebook({noteBookName:"ghost",noteBookPages:"100",noteBookCost:"24"});
instance1.save().then( () => {
console.log('First Object is created');
  }).catch( (e) => {
  console.log('There was an error', e.message);
  });
//instance2
let instance2 = new
Notebook({noteBookName:"hunter",noteBookPages:"130",noteBookCost:"34"});
instance2.save().then( () => {
  console.log('Second Object is created');
    }).catch( (e) => {
    console.log('There was an error', e.message);
    });

// //instance 3
let instance3 = new
Notebook({noteBookName:"hower",noteBookPages:"200",noteBookCost:"44"});
instance3.save().then( () => {
  console.log('Third Object is created');
    }).catch( (e) => {
    console.log('There was an error', e.message);
    });
console.log(instance3);

}

let reseed = true;
if (reseed) { recreateDB();}


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/board',boardRouter);
app.use('/notebook',Nrouter);
app.use('/seclector',Srouter);
app.use('/resource',Res);
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
