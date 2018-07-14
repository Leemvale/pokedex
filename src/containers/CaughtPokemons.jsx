import React from "react";
import Items from "./Items.jsx"
import {fetchPokemons} from "../actions";
import {connect} from "react-redux";

class CaughtPokemons extends Items {
    getUrl() {
        return `http://localhost:3000/caughtPokemons?_expand=pokemon&_page=${this.props.page}&_limit=20`
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
        pokemons: items.map((caugthPokemon) => caugthPokemon.pokemon),
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
)(CaughtPokemons)