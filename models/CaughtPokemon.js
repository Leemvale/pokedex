const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaughtPokemonSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    time: {
        type: String,
        require: true
    },
    pokemonId: {
        type: Object,
        require: true
    }
});

module.exports = CaughtPokemon = mongoose.model('caughtPokemons', CaughtPokemonSchema);