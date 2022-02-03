var mongoose = require('mongoose');

var projectSchema = mongoose.Schema({
    name:String,
    rating:Number
})

module.exports = mongoose.model("projects",projectSchema)