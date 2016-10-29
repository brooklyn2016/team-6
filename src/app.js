// app.js -2
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
		progress : 0,
		lessons : [],
		newton_progress: 0,
		soundwaves_progress: 0,
		kinesiology_progress: 0,
		bodysystems_progress: 0,
		materialscience_progress: 0
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
			//console.log(users);
			req.session.ids = users[0]._id;
			//console.log(req.session);
			res.redirect('/homepage');
		}
		});
})
function compare(a,b) {
  if (a.score < b.score)
    return -1;
  if (a.score > b.score)
    return 1;
  return 0;
}


app.get('/homepage', function(req,res){
	//console.log(req.session);
	User.find(function(err, users, count){
		//console.log(users);
	});
	User.find({_id: req.session.ids},function(err, users, count){
		res.render('homepage', {layout:'layout2',progress:users[0].progress});
	});
})

app.get('/leaderboard', function(req,res){
	User.find(function(err, users, count){
		var sorted = users.sort(compare);
		sorted.reverse();
		res.render('leaderboard', {sorted:sorted,layout:'layout2'})
		});
})

app.get('/NewtonsLawofMotion', function(req,res){
		User.find({_id: req.session.ids},function(err, users, count){
			res.render('newton', {progress:users[0].newton_progress,layout:'layout2',lock:users[0].lessons});
		});
})
app.get('/NewtonsLawofMotion/Lesson1', function(req,res){
		User.find({_id: req.session.ids},function(err, users, count){
			res.render('newton_1', {progress:users[0].newton_progress,layout:'layout2'});
		});
})
app.post('/NewtonsLawofMotion/Lesson1', function(req,res){
		if (req.body.description){
			User.find({_id: req.session.ids},function(err, users, count){
				if(users[0].newton_progress == 0){
					var newScore = users[0].score + 5;
					var newProgress = users[0].progress + 5;
					var newNewton_progress = users[0].newton_progress + 25;
					User.update({_id: req.session.ids},{$set: {score:newScore, progress:newProgress, newton_progress:newNewton_progress}},function(err){
						 if(err){
		                    console.log(err);
		                }
		                else{
		                	
		                   res.redirect('/NewtonsLawofMotion/Lesson2');
		                }
            });		
				}
			}
		)}
		else{
			res.redirect('/NewtonsLawofMotion')
		}
		
})
app.get('/NewtonsLawofMotion/Lesson2', function(req,res){
		User.find({_id: req.session.ids},function(err, users, count){
			
			if(users[0].newton_progress >= 25){
				res.render('newton_2', {progress:users[0].newton_progress,layout:'layout2'});
			}
			else{
				res.redirect('/NewtonsLawofMotion')
			}
	});
})
app.get('/Kinesiology', function(req,res){
		User.find({_id: req.session.ids},function(err, users, count){
			res.render('kinesiology', {progress:users[0].kinesiology_progress,layout:'layout2'});
		});
})
app.get('/Kinesiology/Lesson1', function(req,res){
		User.find({_id: req.session.ids},function(err, users, count){
			res.render('kinesiology_1', {progress:users[0].kinesiology_progress,layout:'layout2'});
		});
})
app.get('/Soundwaves', function(req,res){
		User.find({_id: req.session.ids},function(err, users, count){
			res.render('soundwaves', {progress:users[0].progress,layout:'layout2'});
		});
})
app.get('/Soundwaves/Lesson1', function(req,res){
		User.find({_id: req.session.ids},function(err, users, count){
			res.render('soundwaves_1', {progress:users[0].progress,layout:'layout2'});
		});
})
app.get('/MaterialScience', function(req,res){
		User.find({_id: req.session.ids},function(err, users, count){
			res.render('materialscience', {progress:users[0].materialscience_progress,layout:'layout2'});
		});
})
app.get('/MaterialScience/Lesson1', function(req,res){
		User.find({_id: req.session.ids},function(err, users, count){
			res.render('materialscience_1', {progress:users[0].materialscience_progress,layout:'layout2'});
		});
})
app.get('/BodySystems', function(req,res){
		User.find({_id: req.session.ids},function(err, users, count){
			res.render('bodysystems', {progress:users[0].bodysystems_progress,layout:'layout2'});
		});
})
app.get('/BodySystems/Lesson1', function(req,res){
		User.find({_id: req.session.ids},function(err, users, count){
			res.render('bodysystems_1', {progress:users[0].bodysystems_progress,layout:'layout2'});
		});
})




//
app.listen(3000);