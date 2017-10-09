var mongoose = require("mongoose"),
    todo = require("./models/todo");

var data = [
    {
        desc : "Makan Nasi Pake Sayur",
        completed : false
    }
];

function seedDb(){
    todo.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("Sucess Delete All Todo")
        data.forEach(function(seed){
            todo.create(seed, function(err, data){
                if(err){
                    console.log(err)
                }else{
                    console.log("Added a data");
                }
            });
        });
    });
}

module.exports = seedDb;
    