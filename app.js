var express = require("express"),
    cors = require('cors'),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    todo = require("./models/todo"),
    seedDb = require("./seed"),
    app = express();

app.use(cors());

var corsOptions = {
  origin: 'http://localhost:8080/',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
    
// Add headerss
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', true);

//     // Pass to next layer of middleware
//     next();
// });
    
var todoRoutes = require("./routes/todolist");
    
//For Development Local    
mongoose.connect("mongodb://localhost/todolist");

//For Production
mongoose.connect("mongodb://hans:20121995@ds161503.mlab.com:61503/todolist");
// app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
// seedDb();

app.get("/",(req, res) => {
    res.redirect("/api/todos")
})

app.use("/api/todos", todoRoutes);

//For Production
app.listen(process.env.PORT, process.env.IP,() =>{
    console.log("Server is listening!!!");
});
// For Development Local

// app.listen(8000, function () {
//   console.log('TodoList app listening on port 8000!')
// });



// list of todos GET /todos DONE
// details of todo GET /todos/:id
// create todo POST /todos
// remove todo DELETE /todos/:id
// update todo PUT /todos/:id