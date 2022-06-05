import{HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core'

import { Character } from './character'

@Injectable({
    providedIn:'root'
})

export class CharacterService{
        
   private baseUrl:string;
   
   //Inyeccion de dependencia
    constructor(private http:HttpClient){
        this.baseUrl='https://pokeapi.co/api/v2/pokemon';
    }

    getPokemon(nombre:string){
        return this.http.get(`${this.baseUrl}/${nombre}`);
    }
 
    getDatails(id:number){
        return this.http.get<Character>(`${this.baseUrl}/${id}`);
    }
}
