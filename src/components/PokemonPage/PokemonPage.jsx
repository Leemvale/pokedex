import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap"
import "./PokemonPage.css"

export default class PokemonPage extends Component {
    render() {
        let {pokemon}= this.props;
        let {id, name, caught} = pokemon;
        let statusTag = <p className={"status not-caught"}>Not caught</p>,
            timeTag = null;
        if(caught) {
            statusTag = <p className={"status caught"}>Caught</p>;
            timeTag = <p>Time: {new Date(pokemon.caughtPokemons[0].time).toLocaleString()}</p>
        }
        return (
            <Grid>
                <Row>
                    <Col sm={5}>
                        <img className={"pokemon-profile-img"} src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${id}.png`}/>
                    </Col>
                    <Col sm={7}>
                        <h2 className={"pokemon-profile-name"}>{name.charAt(0).toUpperCase() + name.slice(1)}</h2>
                        <p>ID: {id}</p>
                        {statusTag}
                        {timeTag}
                    </Col>
                </Row>
            </Grid>
        )
    }
}