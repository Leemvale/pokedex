import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import {
     REQUEST_POKEMONS, RECEIVE_POKEMONS, REQUEST_CAUGHT_POKEMONS, RECEIVE_CAUGHT_POKEMONS
} from '../actions/constants'

function pokemons(state = {
    isFetching: false,
    items: [],
    page: 1
}, action) {
    switch (action.type) {
        case REQUEST_POKEMONS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_POKEMONS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.pokemons,
                page: state.page + 1
            });
        default:
            return state;
    }
}

function caughtPokemons(state = {
    isFetching: false,
    items: [],
    page: 1
}, action) {
    switch (action.type) {
        case REQUEST_CAUGHT_POKEMONS:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_CAUGHT_POKEMONS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.pokemons,
                page: state.page + 1
            });
        default:
            return state;
    }
}




const mainReducer = combineReducers({
    routing: routerReducer,
    pokemons,
    caughtPokemons,

});

export default mainReducer