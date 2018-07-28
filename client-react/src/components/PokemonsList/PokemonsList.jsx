import React, { Component } from "react";
import { Grid, Row } from "react-bootstrap";
import PokemonWithCatch from "../PokemonWithCatch/index";
import Pokemon from "../Pokemon/index"
import { Col } from "react-bootstrap";

export default class PokemonsList extends Component {
    render() {
        const { pokemons, caughtList } = this.props;
        const innerContent = pokemons.length ? pokemons.map((pokemon) => {
            return caughtList ? <Col key={pokemon._id}  className="pokemon" xs={6} md={3} ><Pokemon pokemon={pokemon} /></Col> :
                                <PokemonWithCatch key={pokemon._id} pokemon={pokemon} />
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