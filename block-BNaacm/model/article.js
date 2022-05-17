let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let articleSchema = new Schema({
    title: String,
    description: String,
    author: Schema.Types.ObjectId
})

module.exports = mongoose.model("Article", articleSchema)