const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var addressBook = new Schema({
	firstName:{type:String,required:true},
	lastName:{type:String,required:true},
	address:{type:String,required:true},
	city:{type:String,required:true},
	state:{type:String,required:true},
	mobile:{type:Number,required:true},
	email:{type:String,required:true},
	createdAt: { type: Date, default: Date.now },
}, {
	collection: 'addressBook'
});

var addressModel= new mongoose.model('AddressBook',addressBook);
module.exports=addressModel;
