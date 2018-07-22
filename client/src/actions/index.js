import {
    REQUEST_POKEMONS, RECEIVE_POKEMONS, CATCH_POKEMON, POKEMON_TO_CAUGHT,
    REQUEST_CAUGHT_POKEMONS, RECEIVE_CAUGHT_POKEMONS
} from "./constants"

export function requestPokemons() {
    return {
        type: REQUEST_POKEMONS,
    }
}

export function receivePokemons(json) {
    return {
        type: RECEIVE_POKEMONS,
        pokemons: json,
    }
}


export function requestCaughtPokemons() {
    return {
        type: REQUEST_CAUGHT_POKEMONS,
    }
}

export function receiveCaughtPokemons(json) {
    return {
        type: RECEIVE_CAUGHT_POKEMONS,
        pokemons: json,
    }
}

export function catchPokemon() {
    return {
        type: CATCH_POKEMON,
    }
}

export function pokemonToCaught(pokemon) {
    return {
        type: POKEMON_TO_CAUGHT,
        pokemon
    }
}

export function fetchPokemons(page) {
    return function (dispatch) {
        dispatch(requestPokemons());
        return fetch(`http://localhost:5000/api/pokemons`)
            .then(response => response.json())
            .then(json =>
                dispatch(receivePokemons(json))
            )
    }
}

export function fetchCaughtPokemons(page) {
    return function (dispatch) {
        dispatch(requestCaughtPokemons());
        return fetch(`http://localhost:5000/api/caughtPokemons`)
            .then(response => response.json())
            .then(json =>
                dispatch(receiveCaughtPokemons(json))
            )
    }
}

export function addPokemonToCaught(pokemon) {
    return function (dispatch) {
        dispatch(catchPokemon());
        return fetch(`http://localhost:5000/api/caughtPokemons`, {
            method: "post",
            body: JSON.stringify({
                pokemonId: pokemon.id,
                time: new Date()
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(dispatch(pokemonToCaught(pokemon)));
    }
}
