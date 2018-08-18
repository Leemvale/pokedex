const Pokemon = require('./models/Pokemon');
const DB = require('../pokemons');
const mongoose = require('mongoose');

// DB Config
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => {
        console.log('MongoDB Connected...');
        DB.pokemons.forEach((pokemon) => {
            const newPokemon = new Pokemon({
                name: pokemon.name,
                number: pokemon.id
            });
            console.log(newPokemon);
            newPokemon.save()
        })
    })
    .catch(err => console.log(err));





