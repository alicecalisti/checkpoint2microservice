import { Component } from '@angular/core';
import { Pokemon } from '../../interfaces/Pokemon';
import { PokemonService } from '../../services/pokemon.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {

  pokemons: Pokemon[]=[];
  constructor(private pokemonService: PokemonService){

  }

  listar():void{
    this.pokemonService.listar().subscribe((listPokemon) => (this.pokemons=listPokemon));
  }

  ngOnInit():void{
    this.listar();
  }

}
