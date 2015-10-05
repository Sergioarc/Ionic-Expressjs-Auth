var mongoose = require('mongoose')
var Schema = mongoose.Schema;

module.export = mongoose.model('User', new Schema({
	name: String,
	password: String,
	email: String
}))

mongoose.connect('mongodb://localhost:3200/AuthIonic#/register')