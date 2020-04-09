const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const login = require('./routes/login');
const newuser = require('./routes/newuser');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.mongoDB_Path, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(port, () => {
        console.log('connected to mongo via port ' + port);
    });
});

app.use(express.static(__dirname + '/public'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/', (req, res) => {
    res.render('index');
});

app.use('/login', login);
app.use('/newuser', newuser);
const port = process.env.port || 3000;
