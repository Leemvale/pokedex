const Pokemon = require('./models/Pokemon');

const copyDB = function(db){
    db.pokemons.forEach((pokemon) => {
        const newPokemon = new Pokemon({
            name: pokemon.name,
            number: pokemon.id
        });
        newPokemon.save()
    });
};

module.exports = copyDB;