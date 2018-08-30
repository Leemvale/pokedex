import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { PokemonsService } from "./services/pokemons/pokemons.service";
import { AllPokemonsListComponent } from "./components/all-pokemons-list/all-pokemons-list.component";
import { PokemonComponent } from "./components/pokemon/pokemon.component";
import { UsersPokemonsListComponent } from './components/users-pokemons-list/users-pokemons-list.component';
import { PokemonPageComponent } from './components/pokemon-page/pokemon-page.component';
import { RouterModule } from "@angular/router";
import {MatButtonModule} from "@angular/material";


@NgModule({
  declarations: [
    AllPokemonsListComponent,
    PokemonComponent,
    UsersPokemonsListComponent,
    PokemonPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatButtonModule,
  ],
  providers: [PokemonsService],
  exports: [
    AllPokemonsListComponent
  ]
})
export class PokemonsModule { }
