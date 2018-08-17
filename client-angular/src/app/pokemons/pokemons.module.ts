import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { PokemonsService } from "./pokemons.service";
import { PokemonsComponent } from './pokemons.component';
import { AllPokemonsComponent } from "./all-pokemons/all-pokemons.component";
import { PokemonComponent } from "./pokemon/pokemon.component";


@NgModule({
  declarations: [
    PokemonsComponent,
    AllPokemonsComponent,
    PokemonComponent],
  imports: [
    HttpClientModule
  ],
  providers: [PokemonsService],
  exports: [
    PokemonsComponent
  ]
})
export class PokemonsModule { }
