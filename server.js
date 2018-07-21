const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const pokemons = require('./routes/api/pokemons');

const app = express();

//bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));


// Use Routes
app.use('/api/pokemons', pokemons);

app.use(function(req, res) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8080/");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));