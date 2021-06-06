var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
var router = express.Router();

var diaryRouter = require('./routes/diary');

var app = express();

//app.use(express.static(path.join(__dirname, '../fronent/build')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://localhost:27017/myDiary", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.once("open", function() {
  console.log("DB connected!");
});

// router.get('/', function(req, res, next){
//   res.send(express.static(path.join(__dirname, '../frontend/build/index.html')));
// });

app.use('/diary', diaryRouter);

module.exports = app;
