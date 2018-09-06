import { Component, OnInit } from '@angular/core';
import {PokemonsService} from "../../services/pokemons/pokemons.service";
import {ActivatedRoute} from "@angular/router";
import {Pokemon} from "../../../../domain/Pokemon";

@Component({
  selector: 'app-pokemon-page',
  templateUrl: './pokemon-page.component.html',
  styleUrls: ['./pokemon-page.component.scss']
})
export class PokemonPageComponent implements OnInit {

  pokemon: Pokemon = {
    _id: '',
    id: null,
    name: '',
    users: [],
  };
  caught: boolean = false;
  srcImage: string;
  time: Date;

  constructor(private pokemonsService: PokemonsService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPokemon();
  }

  getPokemon() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.pokemonsService.getPokemonById(id).subscribe(res => {
      this.pokemon = <Pokemon>res;
      this.srcImage = `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${this.pokemon.id}.png`;
      if( this.pokemonsService.isPokemonCaughtByUser(this.pokemon.users)) {
        this.caught = true;
        this.time = this.getCaughtTime();
      }
    })
  }

  getCaughtTime() {
    return this.time = this.pokemon.users.find((value, index, obj) => {
      if (value.user === this.pokemonsService.getUserId()) {
        return true
      }
      return false
    }).time;
  }
}
