const express = require('express');
const router = express.Router();

const Pokemon = require('../../models/Pokemon');

// @route  GET api/pokemons
// @desc   Get All Pokemons
// @access Public
router.get('/', (req, res) => {
    let { offset, limit } = req.query;
    Pokemon.find()
        .sort('number')
        .skip(parseInt(offset) * parseInt(limit))
        .limit(parseInt(limit))
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

// @route  GET api/pokemons/caught-pokemons
// @desc   Get All Caught Pokemons
// @access Public
router.get('/caught-pokemons', (req, res) => {
    let { offset, limit } = req.query;
    Pokemon.find({caught: true})
        .sort('time')
        .skip(parseInt(offset) * parseInt(limit))
        .limit(parseInt(limit))
        .then(pokemons => res.json(pokemons))
});

// @router PUT api/pokemons
// @desc   Update to CaughtPokemon
// @access Public
router.put('/', (req, res) => {
    let {id, caught, time} = req.body;
    Pokemon.findByIdAndUpdate(id, {caught, time}, {new: true})
        .then(pokemons =>  res.json(pokemons))
});

router.get('/:id', function (req, res) {
    Pokemon.findOne({number: req.params.id})
        .then(pokemon => res.json(pokemon))
});

router.get('/:id', function (req, res) {
    Pokemon.findOne({number: req.params.id})
        .then(pokemon => res.json(pokemon))
});

module.exports = router;