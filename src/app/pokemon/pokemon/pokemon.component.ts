import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/characters.servic';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
})
export class PokemonComponent {

    nombrePokemon:string ="";
    urlImg:string="";
    nombreReal:string=""
    id:number=0;
    experiencia:number=0;
    localizacion:string=""
    orde:number=0;
    tamano:number=0;
    
    constructor(private characterService:CharacterService){

    }

    //Consumiendo la api con una subcribe 
    mostrarPokemon(){
      if(this.nombrePokemon==""){
        alert("Debe ingresar un nombre valido")
        this.nombrePokemon="";
       }
       else {
      this.characterService.getPokemon(this.nombrePokemon).subscribe((pokemon:any)=>{
        this.urlImg = pokemon.sprites.front_default;
        this.id=pokemon.id;
        this.experiencia=pokemon.base_experience;
        this.localizacion=pokemon.location_area_encounters;
        this.orde=pokemon.order;
        this.tamano=pokemon.weight;
        this.nombreReal=pokemon.name
      console.log(pokemon)});
      
      }
    }

    
}
