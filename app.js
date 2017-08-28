var express = require("express"),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    todo = require("./models/todo"),
    seedDb = require("./seed"),
    app = express();
    
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://preview.c9users.io/hanssagita/todolistproject/FrontEnd/index.html');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
    
var todoRoutes = require("./routes/todolist");
    
// mongoose.connect("mongodb://localhost/todolist");
mongoose.connect("mongodb://hans:20121995@ds161503.mlab.com:61503/todolist");
app.use(bodyParser.urlencoded({extended: true}));
seedDb();

app.get("/",(req, res) =>{
    res.redirect("/api/todos");
})

app.use("/api/todos", todoRoutes);

app.listen(process.env.PORT, process.env.IP,() =>{
    console.log("Server is listening!!!");
});


// list of todos GET /todos DONE
// details of todo GET /todos/:id
// create todo POST /todos
// remove todo DELETE /todos/:id
// update todo PUT /todos/:id