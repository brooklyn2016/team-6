// db.js
var mongoose = require('mongoose');

var User = new mongoose.Schema({
	name:String,
	birthday:Date,
	school:String,
	username:String,
	password:String,
	score: Number,
	progress: Number,
	newton_progress: Number,
	soundwaves_progress: Number,
	kinesiology_progress: Number,
	bodysystems_progress: Number,
	materialscience_progress: Number,
	lessons: Array

});


mongoose.model('User', User);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/team6');