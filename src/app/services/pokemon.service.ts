import { Injectable } from '@angular/core';
import {Pokemon} from '../interfaces/Pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonsUrl = "http://demo3746754.mockable.io/listaPokemon";
  constructor(private http: HttpClient) {
  }
  
  listar(): Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(this.pokemonsUrl) as Observable<Pokemon[]>;
  }

}