const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const items = require('./routes/api/items')

const app = express();
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use(bodyParser.json())
const db = require('./config/keys').mongoURI;
mongoose.connect(db)
.then(() => console.log('mongoose connected'))
.catch(err =>console.log(err))

//use Routes
app.use('/api/items', items)

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);