import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../auth/sevices/auth/auth.service';
import { Pokemon } from "../../../../domain/Pokemon";

@Injectable()
export class PokemonsService {

  catchPokemonRequest: string = 'http://localhost:5000/api/pokemons';

  constructor(private http: HttpClient,
              private authService: AuthService) {}

  public getPokemons(offset, limit) {
    const options = this.authService.checkAuth() ? this.authService.getOptions() : {};
    console.log(this.authService.checkAuth() );
    return this.http.get(`http://localhost:5000/api/pokemons?offset=${offset}&limit=${limit}`, options);
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
}
