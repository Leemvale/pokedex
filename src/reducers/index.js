import { combineReducers } from 'redux'
import { routerReducer, LOCATION_CHANGE } from 'react-router-redux';

import {
     REQUEST_POKEMONS, RECEIVE_POKEMONS
} from '../actions'

function pokemons(state = {
    isFetching: false,
    items: [],
    page: 1
}, action) {
    switch (action.type) {
        case REQUEST_POKEMONS:
            return Object.assign({}, state, {
                isFetching: true
            })
        case RECEIVE_POKEMONS:
            return Object.assign({}, state, {
                isFetching: false,
                items: state.items.concat(action.pokemons),
                page: state.page + 1
            })
        case LOCATION_CHANGE:
            return Object.assign({}, state, {
                isFetching: false,
                items: [],
                page: 1
            })
        default:
            return state
    }
}


const mainReducer = combineReducers({
    routing: routerReducer,
    pokemons
})

export default mainReducer