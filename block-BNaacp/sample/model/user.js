let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: String,
    email: String,
    sports:[String]
})

module.exports = mongoose.model('User', userSchema);