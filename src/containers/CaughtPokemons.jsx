import React from "react";
import { connect } from "react-redux";
import Pokemons from "./Pokemons.jsx"
import { fetchCaughtPokemons } from "../actions";
import PokemonsList from "../components/PokemonsList"

class CaughtPokemons extends Pokemons {
    getUrl() {
        return `http://localhost:3000/caughtPokemons?_expand=pokemon&_page=${this.props.page}&_limit=20`
    }
    render() {
        const { pokemons } = this.props;
        return (
            <div>
                <PokemonsList pokemons={pokemons} caughtList={true}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { caughtPokemons } = state;
    const {
        items,
        page
    } = caughtPokemons || {
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
            dispatch(fetchCaughtPokemons(page, url))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CaughtPokemons)