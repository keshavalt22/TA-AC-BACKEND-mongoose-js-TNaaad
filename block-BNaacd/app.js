let express = require("express");

let mongoose = require("mongoose");

let app = express();

mongoose.connect("mongodb://127.0.0.1:27017/sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err) => {
    console.log(err ? err : "connected to database");
});

app.use("/", (req, res) => {
    res.send("Welcome");
})

app.listen(4000, () => {
    console.log("Server is listening on 4k")
})