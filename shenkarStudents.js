var students = require("./data/students.json");
var grades = require("./data/grades.json");

exports.excellentStudents = function(value){
    var result=[];
    if(value>=0 && value<=100){
       // console.log("getAllExcellenceStudent");
        for(var k in grades){
            if(grades[k].grade >=value){
                for(var i in students){
                    if(students[i].name==grades[k].name){
                            result.push(students[i]);
                    }
                }
            }
        }
    }
    return result;
}

exports.getStudInfo = function(value){
    for(var k in students){
            if(students[k].name==value){
                return(students[k]);
            }
        }  
}

exports.getAllStudents = function(){
    return(students);
}