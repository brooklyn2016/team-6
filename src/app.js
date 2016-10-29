// app.js
var mongoose = require('mongoose');
var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');

app.get('/', function(req,res){
	res.render('home');
})

app.get('/register',function(req,res){

})

app.get('/login', function(req,res){

})

app.listen(3000);