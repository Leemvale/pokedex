import { Component, OnInit } from '@angular/core';

import { PokemonsService } from "../pokemons.service";

@Component({
  selector: 'app-all-pokemons',
  templateUrl: './all-pokemons.component.html',
  styleUrls: ['./all-pokemons.component.css']
})
export class AllPokemonsComponent implements OnInit {

  pokemons = [];
  page: 0;
  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokemonsService.getAllPokemons(this.page).then(pokemons => {this.pokemons = this.pokemons.concat(pokemons); console.log(this.pokemons)})
  }

}
