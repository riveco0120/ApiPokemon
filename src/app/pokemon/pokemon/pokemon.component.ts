import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/characters.servic';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent {

    nombrePokemon:string ="";
    urlImg:string="";
    
    constructor(private characterService:CharacterService){

    }

    //Consumiendo la api con una subcribe 
    search(){
      this.characterService.getPokemon(this.nombrePokemon).subscribe((pokemon:any)=>
        this.urlImg = pokemon.sprites.front_default);
    }
}
