const express = require('express');
const router = express.Router();

const Pokemon = require('../../models/Pokemon');

// @route  GET api/pokemons
// @desc   Get All Pokemons
// @access Public
router.get('/', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    Pokemon.find()
        .then(pokemons =>  res.json(pokemons))
});

// @route  POSTapi/pokemons
// @desc   Create A Post
// @access Public
router.post('/', (req, res) => {
    const newPokemon = new Pokemon({
        name: req.body.name
    });

    newPokemon.save().then(pokemon => res.json(pokemon));
});

module.exports = router;