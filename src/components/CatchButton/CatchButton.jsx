import React, { Component } from "react";
import "./CatchButton.css";
import { Button } from "react-bootstrap";


export default class CatchButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            btnClicked: false
        }
    }
    catchButtonCliked = () => {
        let {pokemon, catchPokemon} = this.props;
        catchPokemon(pokemon);
        this.setState({
            btnClicked: true
        })
    }

    isDisabled() {
        let {pokemon} = this.props;
        let {btnClicked} = this.state;
        return pokemon.caught || btnClicked;
    }

    render() {

        return (
            <Button className={"caught-btn"} onClick={this.catchButtonCliked} disabled={ this.isDisabled()}>
                {this.isDisabled() ? "Caught" :"Catch"}
            </Button>
        )
    }
}