import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/characters.servic';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent {

    nombrePokemon:string ="";
    
    constructor(private characterService:CharacterService){

    }

    search(){
      this.characterService.getPokemon(this.nombrePokemon)
    }
}
