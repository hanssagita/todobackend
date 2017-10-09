var mongoose = require("mongoose");
var autoIncrement = require("mongoose-sequence")(mongoose);

var todoSchema = new mongoose.Schema({
    desc: String,
    completed: {type: Boolean, default: false},
    date : { type: Date, default: Date.now }
});
todoSchema.plugin(autoIncrement,{inc_field: 'todoId'});

module.exports = mongoose.model("Todo", todoSchema);