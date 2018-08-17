const express = require('express');
const router = express.Router();

const checkAuth = require('../../middlewares/auth/checkAuth');

const Pokemon = require('../../models/Pokemon');

router.get('/', (req, res) => {
    let { offset, limit } = req.query;
    Pokemon.find()
        .sort('number')
        .skip(parseInt(offset) * parseInt(limit))
        .limit(parseInt(limit))
        .then(pokemons =>  res.json(pokemons))
});

router.get('/caught-pokemons', checkAuth, (req, res) => {
    const { offset, limit } = req.query;
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        console.log(user);

        res.status(200).send(user.caughtPokemons);
    });
});

router.put('/', checkAuth, (req, res) => {
    const { pokemonId, time } = req.body;
    console.log(req.body);
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
    })
        .then(user => {
            User.findByIdAndUpdate(req.userId, {caughtPokemons: user.caughtPokemons.concat({pokemonId, time})}, {new: true})
            .then(user =>  res.json(user.caughtPokemons))
        })
});

router.get('/:id', (req, res) => {
    Pokemon.findOne({number: req.params.id})
        .then(pokemon => res.json(pokemon))
});

module.exports = router;