//var grades = require("./data/grades.json");
var mongoose = require('mongoose');
var db = mongoose.connect('stusr:stusr@ds019882.mlab.com:19882/students');
var grades = require('./studentSchema').Student;

mongoose.connection.once('open', function(){
    console.log('connected.');      
    grades.find({}, function(err, studentsDB) {
        if(err) throw err;
        grades= studentsDB;
    });
});

exports.excellentStudents = function(value){
    var result=[];
    for(var k in grades){
        if(grades[k].grade >=value){
           result.push(grades[k]);
        }
    }
    return result;
}

exports.getStudInfo = function(value){
    for(var k in grades){
            if(grades[k].name==value){
                return(grades[k]);
            }
        }  
}

exports.getAllStudents = function(){
    return grades;
}