var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var opiskelijaRouter = require('./routes/opiskelija');
var arviointiRouter = require('./routes/arviointi');
var opintojaksoRouter = require('./routes/opintojakso');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/opiskelija',opiskelijaRouter);
app.use('/arviointi',arviointiRouter);
app.use('/opintojakso',opintojaksoRouter);

module.exports = app;
