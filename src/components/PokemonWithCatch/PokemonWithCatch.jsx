import React, { Component } from "react";
import { Col } from "react-bootstrap";
import Pokemon from "../Pokemon";
import CatchButton from "../CatchButton"


export default class PokemonWithCatch extends Component {
    render() {
        let {pokemon, catchPokemon} = this.props;
        return (
            <Col className="pokemon" xs={6} md={3} >
                <Pokemon pokemon={pokemon}/>
                <CatchButton pokemon = {pokemon} catchPokemon={catchPokemon}/>
            </Col>
        );
    }
}