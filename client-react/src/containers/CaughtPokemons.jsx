import React from "react";
import { connect } from "react-redux";
import Pokemons from "./Pokemons.jsx"
import { fetchCaughtPokemons } from "../actions/index";
import PokemonsList from "../components/PokemonsList/index"

class CaughtPokemons extends Pokemons {
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
        page: 0
    };
    return {
        pokemons: items,
        page,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPokemons: (page) => {
            dispatch(fetchCaughtPokemons(page))
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CaughtPokemons)