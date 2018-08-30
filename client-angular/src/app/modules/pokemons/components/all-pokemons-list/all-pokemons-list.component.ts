import { Component, OnInit } from '@angular/core';

import { PokemonsService } from '../../services/pokemons/pokemons.service';
import { Pokemon } from '../../../../domain/Pokemon';

@Component({
  selector: 'app-all-pokemons-list',
  templateUrl: './all-pokemons-list.component.html',
  styleUrls: ['./all-pokemons-list.component.scss']
})
export class AllPokemonsListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  offset: number = 0;
  limit: number = 20;
  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.getPokemons();
    }

  private getPokemons() {
    this.pokemonsService.getPokemons(this.offset, this.limit)
      .subscribe(pokemons =>  {
        this.pokemons = this.pokemons.concat(<Pokemon[]>pokemons);
        this.offset++;
      })
  }

  public catchPokemon(pokemon: Pokemon) {
    const indx = this.pokemons.indexOf(pokemon);
    this.pokemonsService.catchPokemon(pokemon).subscribe(
      () => this.pokemons[indx].users.push(this.pokemonsService.getUserId()),
      err => console.error(err));

  }

  public isAuth() {
    return this.pokemonsService.isUserAuthorized();
  }

  public isPokemonCaughtByUser(pokemonUsersList) {
    if (this.isAuth()) {
      if (pokemonUsersList.includes(this.pokemonsService.getUserId())) {
        return true;
      }
    }
    return false;
  }
}
