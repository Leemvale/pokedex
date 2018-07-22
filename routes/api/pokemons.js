const express = require('express');
const router = express.Router();

const Pokemon = require('../../models/Pokemon');

// @route  GET api/pokemons
// @desc   Get All Pokemons
// @access Public
router.get('/', (req, res) => {
    Pokemon.find()
        .then(pokemons =>  res.json(pokemons))
});

// @route  POST api/pokemons
// @desc   Create A Pokemon
// @access Public
router.post('/', (req, res) => {
    const newPokemon = new Pokemon({
        name: req.body.name
    });

    newPokemon.save().then(pokemon => res.json(pokemon));
});

module.exports = router;