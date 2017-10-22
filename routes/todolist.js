var express = require("express");
var router = express.Router();
var todo = require("../models/todo");
var shortId = require("shortid");

//See All Data
router.get("/",(req, res) =>{
    todo.find({}, function(err, allData){
        if(err){
            res.send(err);
        }else{
            res.send({
              status:200,
              count:allData.length,
              results:allData
            });
        }
    })
});

//See detail Data
router.get("/:id",(req, res) =>{
    todo.findOne({ 'todoId': req.params.id}, function(err, data){
        if(err){
            res.send(err);
        }else{
            res.send({
              status:200,
              result:data
            });
        }
    })
});

//Add new Data
router.post("/",(req, res) =>{
    var desc = req.body.desc;
    if(desc != 'undefined') {
        var newTodos = {
          desc : desc,
          todoId : shortId.generate(),
          date: Date.now(),
          completed: false
        };
        todo.create(newTodos, function(err, data){
            if(err){
                console.log(err)
            }else{
                res.send({
                  status:200,
                  message:"Success Add " + data.desc,
                  result: newTodos
                });
            }
        });
    }else {
        res.send("Failed add Data");
    }
});

//Update Data Into Checked
router.post("/:id",(req, res) =>{
    var completed = req.body.completed;
    if(completed != 'undefined') {
        var newStatus = {completed : completed};
        todo.findOneAndUpdate({'todoId': req.params.id} , newStatus, function(err, data){
            if(err){
                console.log(err)
            }else{
                res.send({
                  status:200,
                  message:"Success Change status completed "
                });
            }
        });
    }else {
        res.send("Success Update to Data");
    }
});

//Update Data
router.put("/:id",(req, res) =>{
    var desc = req.body.desc;
    var newTodos = {desc : desc};
    todo.findOneAndUpdate({'todoId': req.params.id}, newTodos , function(err, data){
        if(err){
            console.log(err)
        }else{
          res.send({
            status:200,
            message:"Success Update " + data.desc
          });
        }
    })
})

//Delete Data
router.delete("/:id",(req, res) =>{
    todo.findOneAndRemove({'todoId': req.params.id}, function(err){
        if(err){
            console.log(err);
        }else{
          res.send({
            status:200,
            message:"Success Delete"
          });
        }
    })
})

module.exports = router;