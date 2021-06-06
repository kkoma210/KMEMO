var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');

var diaryRouter = require('./routes/diary');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

mongoose.connect("mongodb://whale.sparcs.org:34567/myDiary", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: true
});

const db = mongoose.connection;
db.once("open", function() {
  console.log("DB connected!");
});

app.use('/diary', diaryRouter);

module.exports = app;
