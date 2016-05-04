var grades = require("./data/grades.json");

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
    return(grades);
}
