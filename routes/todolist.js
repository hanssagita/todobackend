var express = require("express");
var router = express.Router();
var todo = require("../models/todo");


//See All Data
router.get("/",(req, res) =>{
    todo.find({}, function(err, allData){
        if(err){
            res.send(err);
        }else{
            res.send(allData);
        }
    })
});
//See detail Data
router.get("/:id",(req, res) =>{
    todo.findById(req.params.id, function(err, data){
        if(err){
            res.send(err);
        }else{
            res.send(data);
        }
    })
});

//Add new Data
router.post("/",(req, res) =>{
    var title = req.body.title;
    var desc = req.body.desc;
    var newTodos = {title: title, desc : desc};
    todo.create(newTodos, function(err, data){
        if(err){
            console.log(err)
        }else{
            res.send("Sucess add "+ title);
        }
    });
});

//Update Data
router.put("/:id",(req, res) =>{
    var title = req.body.title;
    var desc = req.body.desc;
    var newTodos = {title: title, desc : desc};
    todo.findByIdAndUpdate(req.params.id, newTodos , function(err, data){
        if(err){
            console.log(err)
        }else{
            res.send("Success update "+ title);
        }
    })
})

//Delete Data
router.delete("/:id",(req, res) =>{
    todo.findByIdAndRemove(req.params.id, function(err){
        if(err){
            console.log(err);
        }else{
            res.send("Sucessfull Delete todos")
        }
    })
})

module.exports = router;