var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

// some environment variables
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views/');

http.createServer(app).listen(app.get('port'), function(){
  console.log(app.settings.views);
  console.log('Express server listening on port ' + app.get('port'));
});

// handler
var api = require('./controllers/api_controller.js');
//Get country list
app.get('/countries', api.list);
//get method - load form
app.get('/item',  api.product_form);
//Post method - Insert data
app.post('/item', api.add_product);