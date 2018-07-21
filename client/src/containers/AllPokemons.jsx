import React from "react";
import { connect } from 'react-redux'
import {fetchPokemons} from "../actions/index";
import Pokemons from "./Pokemons.jsx"
import PokemonsList from "../components/PokemonsList/index"

class AllPokemons extends Pokemons{
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
        items,
        page
    } = pokemons || {
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
        loadPokemons: (page) => {
            dispatch(fetchPokemons(page))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllPokemons)