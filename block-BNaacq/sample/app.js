let express = require('express');

let mongoose = require('mongoose');

let app = express();

let Article = require('./models/articles');

let Comment = require('./models/comments');

let User = require('./models/users');

mongoose.connect('mongodb://127.0.0.1:27017/sample', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    console.log(err ? err : "connected to database")
})

app.get('/', () => {
    res.send('Welcome');
});

app.listen(4000, () => {
    console.log('Listening on port 4k')
})

