var mongoose = require('mongoose')

var UserSchema = new mongoose.Schema({
	uid:Number,
	username:String,
	createTime:Date,
	localLogin:Date
});

mongoose.model('User',UserSchema)