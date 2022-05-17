let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name : String,
    age: Number,
    email: {type: String, lowercase: true},
    age: {type: Number, minimum: 0}
}, {timestamps: true});
