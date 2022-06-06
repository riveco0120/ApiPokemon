import { Component, OnInit } from '@angular/core';
import { CharacterService } from 'src/app/characters.servic';

@Component({
  selector: 'app-estadistica',
  templateUrl: './estadistica.component.html',
})
export class EstadisticaComponent {

  
  nombrePokemon:string ="";
  urlImg:string="";
  
  constructor(private characterService:CharacterService){

  }

  //Consumiendo la api con una subcribe 
  mostrarPokemon(){
   /* if(this.nombrePokemon==""){
      alert("Debe ingresar un nombre valido")
      this.nombrePokemon="";
     }7*/
      {
    this.characterService.getPokemon(this.nombrePokemon).subscribe((pokemon:any)=>
     console.log(pokemon));
     }
  }

  

}
