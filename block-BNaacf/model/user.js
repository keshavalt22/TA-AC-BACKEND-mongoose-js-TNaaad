let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let userSchema = new Schema({
    name : String,
    email: {type: String, lowercase: true},
    age: {type: Number, default: 0},
    favorites: [String],
    marks: [Number]
}, {timestamps: true});

let addressSchema = new Schema({
    village: String,
    city: String,
    state: String,
    pin: Number,
    user: Schema.Types.ObjectId
})