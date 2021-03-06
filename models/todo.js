var mongoose = require("mongoose");

var todoSchema = new mongoose.Schema({
    desc: String,
    todoId: String,
    completed: {type: Boolean, default: false},
    date : { type: Date, default: Date.now }
});

module.exports = mongoose.model("Todo", todoSchema);