const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
    _id: { type: Schema.ObjectId, auto: true },
    name: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    }
});

module.exports = Pokemon = mongoose.model('pokemons', PokemonSchema);
