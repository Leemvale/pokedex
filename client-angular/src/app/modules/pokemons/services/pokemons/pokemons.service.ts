import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../../services/auth/auth.service';
import { Pokemon } from "../../../../domain/Pokemon";

@Injectable()
export class PokemonsService {

  catchPokemonRequest: string = 'http://localhost:5000/api/pokemons';

  constructor(private http: HttpClient,
              private authService: AuthService) {}

  public getPokemons(offset, limit) {
    return this.http.get(`http://localhost:5000/api/pokemons?offset=${offset}&limit=${limit}`);
  }

  public getCaughtPokemons(offset, limit) {
    return this.http.get(`http://localhost:5000/api/pokemons/caught-pokemons?offset=${offset}&limit=${limit}`, this.authService.getOptions());
  }

 public catchPokemon(pokemon: Pokemon) {
    return this.http.put(this.catchPokemonRequest, {pokemon, time: Date.now()}, this.authService.getOptions())
 }

 public getPokemonById(id) {
    return this.http.get(`http://localhost:5000/api/pokemons/${id}`, this.authService.getOptions())
 }

 public isPokemonCaughtByUser(pokemonUsersList) {
    pokemonUsersList = pokemonUsersList.map(item => item.user);
    if (this.authService.checkAuth()) {
      if (pokemonUsersList.includes(this.getUserId())) {
        return true;
      }
    }
    return false;
  }

 public isUserAuthorized() {
    return this.authService.checkAuth();
 }

 public getUserId() {
    return this.authService.getUserId();
 }
}
