import React, { Component } from "react";
import PokemonsList from "../components/PokemonsList"

export default class Pokemons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemons: [],
            page: 1
        }
    }

    catchPokemon = (pokemon) => {
        fetch(`http://localhost:3000/caughtPokemons`, {
            method: "post",
            body: JSON.stringify({
                pokemonId: pokemon.id,
                time: new Date()
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        fetch(`http://localhost:3000/pokemons/${pokemon.id}`, {
            method: "put",
            body: JSON.stringify({
                name: pokemon.name,
                caught: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    loadPokemons = () => {
        let {pokemons, page} = this.state;
        let url = `http://localhost:3000/pokemons?_page=${page}&_limit=20?`;
        fetch(url)
            .then((response) => response.json())
            .then((newPokemons) => {
                this.setState({
                    pokemons:pokemons.concat(newPokemons),
                    page: page + 1
                })
            });
    }

    handleScroll = () => {
        let scrollY = window.scrollY;
        let allScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if(scrollY === allScroll) {
            this.loadPokemons();
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.loadPokemons();
    }

    render() {
        let {pokemons} = this.state;
        return (
            <div>
                <PokemonsList pokemons={pokemons} catchPokemon={this.catchPokemon}/>
            </div>
        );
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}