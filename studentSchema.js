var mongoose = require('mongoose');
var schema = mongoose.Schema;
var studentSchema = new schema({
    name: {type:String, index:1, required:true, unique:true},
    grade: Number,
    id: Number,
    age: Number
}, {collection: 'students'});

exports.Student = mongoose.model('Student', studentSchema);
