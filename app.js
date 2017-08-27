var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    todo = require("./models/todo"),
    seedDb = require("./seed"),
    app = express();
    
var todoRoutes = require("./routes/todolist");
    
// mongoose.connect("mongodb://localhost/todolist");
mongoose.connect("mongodb://hans:20121995@ds161503.mlab.com:61503/todolist");
app.use(bodyParser.urlencoded({extended: true}));
seedDb();

app.get("/",(req, res) =>{
    res.redirect("/todos");
})

app.use("/todos", todoRoutes);

app.listen(process.env.PORT, process.env.IP,() =>{
    console.log("Server is listening!!!");
});


// list of todos GET /todos DONE
// details of todo GET /todos/:id
// create todo POST /todos
// remove todo DELETE /todos/:id
// update todo PUT /todos/:id