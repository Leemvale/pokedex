const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PokemonSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        require: true
    },
    number: {
        type: Number,
        require: true
    },
    caught: Boolean,
    time: Date
});
module.exports = Pokemon = mongoose.model('pokemons', PokemonSchema);