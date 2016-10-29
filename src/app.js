// app.js
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var db = require('./db');
var path = require("path");
var publicPath = path.resolve(__dirname, "public");
app.use(express.static(publicPath));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'hbs');
var session = require('express-session');

var User = mongoose.model('User');

var sessionOptions = { 
	secret: 'secret for signing session id', 
	saveUninitialized: false, 
	resave: false 
};
app.use(session(sessionOptions));

app.get('/', function(req,res){
	res.render('home');
})

app.get('/register',function(req,res){
	res.render('register');
})

app.get ('/home', function(req,res){
	res.redirect('/');
});

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
		password: req.body.password,
		score : 0,
		progress : 0
	}).save(function(err, users, count){
		//console.log(users._id);
	//	console.log(users);
	//	console.log(users._id);
		req.session.ids = users._id;
		res.redirect('/welcome');
		//res.render('welcome', {user:req.body.username});
	});
});

app.get('/welcome', function(req,res){
	//console.log(req.session.ids);

	User.find({_id: req.session.ids},function(err, users, count){
			//console.log(users);
		//	console.log({user[0]:users.username});
			res.render('welcome', {user:users[0].username});
		});
	
})



app.get('/login', function(req,res){
	res.render('login');
})

app.post('/login', function(req,res){

	User.find({username: req.body.username, password: req.body.password},function(err, users, count){
		//console.log(users);
		//console.log(users[0]);
		if(users[0] == undefined){
			res.redirect('/login');
		}
		else{
			res.redirect('/');
		}
		});
})

app.get('/homepage', function(req,res){
	res.render('homepage', {layout:'layout2'});
})

app.get('/leaderboard', function(req,res){
	
})
//
app.listen(3000);