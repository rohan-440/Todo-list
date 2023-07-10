const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
    list :{
        type : String,
        required : [true,"Enter the task"],
        unique : true
    }
});

module.exports = mongoose.model("listSchema",listSchema);