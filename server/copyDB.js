const Pokemon = require('./models/Pokemon');
const DBjson = require('../pokemons');
const mongoose = require('mongoose');

// db Config
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connected...');
        db.pokemons.drop();
        DBjson.pokemons.forEach((pokemon) => {
            const newPokemon = new Pokemon({
                name: pokemon.name,
                number: pokemon.id
            });
            newPokemon.save()
        })
    })
    .catch(err => console.log(err));





