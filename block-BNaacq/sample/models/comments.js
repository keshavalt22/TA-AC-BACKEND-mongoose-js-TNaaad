let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let commentSchema = new Schema({
    content : String,
    author : Schema.Types.ObjectId,
    article : String
}, {timestamps: true});

module.exports = mongoose.model("Comment", commentSchema);