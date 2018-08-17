import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  name = "pokemon";
  id = 1;
  src = `https://raw.githubusercontent.com/epam-js-may-2018/homework-7-js/master/pokemons/${this.id}.png`;
  constructor() {
  }

  ngOnInit() {
  }

}
