import React, { Component } from "react";
import "./Pokemon.css";
import { Link } from "react-router-dom";


export default class Pokemon extends Component {
    render() {
        const { pokemon } = this.props;
        const { name, id } = pokemon;
        return (
            <Link to={`/pokemons/${id}`}>
                <figure>
                    <img className={"pokemon-img"}
                         src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemon.number}.png`}/>
                    <figcaption className={"pokemon-name"}>{name.charAt(0).toUpperCase() + name.slice(1)}</figcaption>
                </figure>
            </Link>
        );
    }
}