let mongoose = require("mongoose");
const { schema } = require("./comments");

let Schema = mongoose.Schema;

let userSchema = new Schema ({
    name : {type: String, required: true},
    email: {type: String, trim: true, match: /@/},
    age: {type: Number, default: 18}
});

module.exports = mongoose.model("User", userSchema);