import React from "react";
import Pokemons from "./Pokemons.jsx"

export default class CaughtPokemons extends Pokemons {
    loadPokemons = () => {
        let {pokemons, page} = this.state;
        let url = `http://localhost:3000/caughtPokemons?_expand=pokemon&_page=${page}&_limit=20`;
        fetch(url)
            .then((response) => response.json())
            .then((caughtPokemons) => {
                this.setState({
                    pokemons: pokemons.concat(caughtPokemons.map((caughtPokemon)=> caughtPokemon.pokemon)),
                    page: page + 1
                })
            });
    }

}