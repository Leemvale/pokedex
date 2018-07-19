import React, { Component } from "react";
import "./CatchButton.css";
import { Button } from "react-bootstrap";
import { addPokemonToCaught } from "../../actions";
import { connect } from "react-redux";

class CatchButton extends Component {
    isDisabled() {
        const { pokemon } = this.props;
        return !!pokemon.caughtPokemons.length;
    }

    render() {
        const { pokemon, catchPokemon } = this.props;
        return (
            <Button className={"caught-btn"} onClick={catchPokemon.bind(null, pokemon)} disabled={ this.isDisabled()}>
                {this.isDisabled() ? "Caught" :"Catch"}
            </Button>
        )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        catchPokemon: (pokemon) => {
            dispatch(addPokemonToCaught(pokemon.id))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(CatchButton)