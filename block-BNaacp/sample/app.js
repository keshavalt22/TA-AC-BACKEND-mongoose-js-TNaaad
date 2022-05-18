let express = require('express');

let mongoose = require('mongoose');
const user = require('./model/user');

let app = express();

let User = require('./model/user');

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/sample", {
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err) => {
    console.log(err ? err : "connected to database");
});

app.get('/', (req, res) => {
    res.send("Welcome");
})

app.post('/users', (req, res, next) => {
    console.log(req.body);
    User.create(req.body, (err, user) => {
        console.log(err);
        res.json(user);
    });
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    User.find({'_id': id},(err, user) => {
        console.log(err);
        res.json(user);
    })
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    User.findOne({'_id': id},(err, user) => {
        console.log(err);
        res.json(user);
    })
})

app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    User.findById(id,(err, user) => {
        console.log(err);
        res.json(user);
    })
})

app.get('/users', (req, res, next) => {
    User.find({}, (err, users) => {
        console.log(err);
        res.json(users);
    })
})

app.put("/users/:id", (req, res) => {
    let id = req.params.id;
    User.findByIdAndUpdate(id, req.body, {new: true}, (err, updatedUser) => {
        console.log(err);
        res.json(updatedUser);
    })
})

app.put("/users/:id", (req, res) => {
    let id = req.params.id;
    User.updateOne(id, req.body, {new: true}, (err, updatedUser) => {
        console.log(err);
        res.json(updatedUser);
    })
})

app.delete("/users/:id", (req, res) => {
    User.findByIdAndDelete(req.params.id, req.body, (err, deletedUser) => {
        console.log(err);
        res.send(`${deletedUser.name} is deleted`);
    })
})

app.listen(4000, () => {
    console.log('server is listening on 4k')
})