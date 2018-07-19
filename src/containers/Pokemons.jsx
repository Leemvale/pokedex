import React, { Component } from "react";

export default class Pokemons extends Component {

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

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}