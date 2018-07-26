import React, { Component } from "react";
import PokemonPage from "../components/PokemonPage/index"

export default class PokemonDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: null
        }
    }

    getPokemon() {
        let {id}= this.props.match.params;
        fetch(`http://localhost:5000/api/pokemons/${id}`)
            .then((response) => response.json())
            .then((pokemon) => {
                this.setState({
                    pokemon: pokemon
                });
            })
    }
    componentDidMount() {
        this.getPokemon();
    }

    render() {
        let {pokemon} = this.state;
        return(
            pokemon ? <PokemonPage pokemon = {pokemon}/> : null
        )
    }
}