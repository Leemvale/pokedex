
export const REQUEST_POKEMONS = 'REQUEST_POKEMONS';
export function requestPokemons() {
    return {
        type: REQUEST_POKEMONS,
    }
}

export const RECEIVE_POKEMONS = 'RECEIVE_POKEMONS';
export function receivePokemons(json) {
    console.log(json)
    return {
        type: RECEIVE_POKEMONS,
        pokemons: json,
    }
}

export function fetchPokemons(page, url) {
    return function (dispatch) {
        dispatch(requestPokemons())
        return fetch(url)
            .then((response) => response.json())
            .then(json =>
                dispatch(receivePokemons(json))
            )
    }
}

