import React from "react";
import { connect } from 'react-redux'
import {fetchPokemons} from "../actions";
import Pokemons from "./Pokemons.jsx"
import PokemonsList from "../components/PokemonsList"

class AllPokemons extends Pokemons{

    getUrl() {
        return `http://localhost:3000/pokemons?_embed=caughtPokemons&_page=${this.props.page}&_limit=20?`;
    }
    render() {
        const { pokemons } = this.props;
        return (
            <div>
                <PokemonsList pokemons={pokemons} caughtList={false}/>
            </div>
        );
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
    };
    return {
        pokemons: items,
        page,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemons: (page, url) => {
            dispatch(fetchPokemons(page, url))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllPokemons)