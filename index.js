var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var func = require('./shenkarStudents');


app.get('/', function(req,res){
    res.send(func.getAllStudents());
});

app.get('/excellentStudents/:value', function(req,res){
    var value = req.params.value;
    res.send(func.excellentStudents(value));
});

app.get('/getStudInfo/:value', function(req,res){
    var value = req.params.value;
    res.send(func.getStudInfo(value));
});


app.listen(port);
console.log("listening on port"+port);