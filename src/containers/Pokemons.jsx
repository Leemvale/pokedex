import React from "react";
import { connect } from 'react-redux'
import {fetchPokemons} from "../actions";
import Items from "./Items.jsx"

class Pokemons extends Items{

    getUrl() {
        return `http://localhost:3000/pokemons?_page=${this.props.page}&_limit=20?`;
    }

    catchPokemon = (pokemon) => {
        fetch(`http://localhost:3000/caughtPokemons`, {
            method: "post",
            body: JSON.stringify({
                pokemonId: pokemon.id,
                time: new Date()
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
            method: "put",
            body: JSON.stringify({
                name: pokemon.name,
                caught: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
}

const mapStateToProps = (state) => {
    const { pokemons } = state;
    const {
        isFetching,
        items,
        page
    } = pokemons || {
        isFetching: true,
        items: [],
        page: 1
    }
    return {
        pokemons: items,
        page,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemons: (page, url) => {
            dispatch(fetchPokemons(page, url))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pokemons)