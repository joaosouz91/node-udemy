var express = require('express');
var consign = require('consign');
var bodyparser = require('body-parser');
var expressValidator = require('express-validator')

var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(bodyparser.urlencoded({extended : true}));
app.use(expressValidator({
    customValidators: {
      isValidDate: function(value) {
        if (!value.match(/^\d{4}-\d{2}-\d{2}$/)) return false;
      
        const date = new Date(value);
        if (!date.getTime()) return false;
        return date.toISOString().slice(0, 10) === value;
      }
    }
  }));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);

module.exports = app;