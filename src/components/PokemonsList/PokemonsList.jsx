import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import PokemonWithCatch from "../PokemonWithCatch";
import Pokemon from "../Pokemon"
import { Col } from "react-bootstrap";

export default class PokemonsList extends Component {
    render() {
        const { pokemons, caughtList } = this.props;
        let innerContent = pokemons.length ? pokemons.map((pokemon) => {
            return caughtList ? <Col key={pokemon.id}  className="pokemon" xs={6} md={3} ><Pokemon pokemon={pokemon} /></Col> :
                                <PokemonWithCatch key={pokemon.id} pokemon={pokemon} />
        }) : null;
        return (
            <Grid>
                <Row>
                    {innerContent}
                </Row>
            </Grid>
        );
    }
}