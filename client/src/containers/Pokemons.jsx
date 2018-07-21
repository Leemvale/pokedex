import React, { Component } from "react";

export default class Pokemons extends Component {

    handleScroll = () => {
        let scrollY = window.scrollY;
        let allScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        if (scrollY === allScroll) {
            this.props.loadPokemons(this.props.page);
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.props.loadPokemons(this.props.page);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}