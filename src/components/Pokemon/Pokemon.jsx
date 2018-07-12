import React, { Component } from "react";
import "./Pokemon.css";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


export default class Pokemon extends Component {
    render() {
        let {pokemon} = this.props;
        let {name, id} = pokemon;
        return (
            <Link to={`/pokemons/${id}`}>
                <figure>
                    <img className={"pokemon-img"}
                         src={`https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${pokemon.id}.png`}/>
                    <figcaption className={"pokemon-name"}>{name.charAt(0).toUpperCase() + name.slice(1)}</figcaption>
                </figure>
            </Link>
        );
    }
}