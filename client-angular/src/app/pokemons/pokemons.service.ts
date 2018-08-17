import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PokemonsService {

  url = `http://localhost:5000/api/pokemons?offset=0&limit=16`;

  constructor(private http: HttpClient) { }

  getAllPokemons(page) {
    return this.http.get(this.url).toPromise();
  }
}
