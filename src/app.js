// app.js
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var db = require('./db');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');

var User = mongoose.model('User');
app.get('/', function(req,res){
	res.render('home');
})

app.get('/register',function(req,res){
	res.render('register');
})


app.post('/register', function(req, res) {
	/*
	var tempObj = {};
	tempObj.name =  req.body.name;
	tempObj.birthday = req.body.birthday;
	tempObj.school = req.body.school;
	*/
	new User({
		name: req.body.name,
		birthday: req.body.birthday,
		school: req.body.school,
		username: req.body.username,
		password: req.body.password
	}).save(function(err, users, count){
		res.redirect('/');
	});
});


app.get('/login', function(req,res){

})

app.listen(3000);