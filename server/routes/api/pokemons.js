const express = require('express');
const router = express.Router();

const checkAuth = require('../../middlewares/auth/checkAuth');

const Pokemon = require('../../models/Pokemon');
const User = require('../../models/User');

router.get('/', (req, res) => {
    let { offset, limit } = req.query;
    Pokemon.find()
        .sort('number')
        .skip(parseInt(offset) * parseInt(limit))
        .limit(parseInt(limit))
        .then(pokemons =>  {
            if(req.userId) {
                return res.status(200).json({pokemons, userId: req.userId})
            }
            res.status(200).json(pokemons)
        })
});

router.get('/caught-pokemons', checkAuth, (req, res) => {
    const { offset, limit } = req.query;
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
        res.status(200).json(user.caughtPokemons);
    });
});

router.put('/', checkAuth, (req, res) => {
    const { pokemonId, time } = req.body;
    User.findById(req.userId, { password: 0 }, function (err, user) {
        if (err) return res.status(500).send("There was a problem finding the user.");
        if (!user) return res.status(404).send("No user found.");
    })
        .then((user) => {
            Pokemon.findOne({ number: pokemonId },{}, function (err, pokemon) {
                if (err) return res.status(500).send("There was a problem finding the pokemon.");
                if (!pokemon) return res.status(404).send("No pokemon found.");
                User.findByIdAndUpdate(req.userId, {caughtPokemons: user.caughtPokemons.concat({pokemonId, time})}, {new: true})
                    .then(user =>  {
                        Pokemon.findOneAndUpdate({ number: pokemonId }, {users: pokemon.users.concat(req.userId)})
                            .then(pokemon =>  res.json({users: pokemon.users, pokemons: user.caughtPokemons}))
                    });

            })
        })

});

router.get('/:id', (req, res) => {
    Pokemon.findOne({number: req.params.id})
        .then(pokemon => res.json(pokemon))
});

module.exports = router;