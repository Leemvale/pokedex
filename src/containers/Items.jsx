import React, {Component} from "react";
import PokemonsList from "../components/PokemonsList"


export default class Items extends Component {
    handleScroll = () => {
        let scrollY = window.scrollY;
        let allScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (scrollY === allScroll) {
            this.props.loadPokemons(this.props.page, this.getUrl());
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.props.loadPokemons(this.props.page, this.getUrl());
    }

    render() {
        let {pokemons} = this.props;
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