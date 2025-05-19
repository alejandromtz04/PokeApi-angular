import { Component, OnInit } from '@angular/core';
import { CommonModule, NgIf, NgFor } from '@angular/common';

import { PokemonService } from '../services/pokemon.service';
import { dataPokemon, PokemonInterface } from '../interfaces/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  imports: [CommonModule, NgIf, NgFor],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css',
})
export class PokemonComponent implements OnInit {
  
  constructor(private pokemonService: PokemonService) { }

  pokemonList: dataPokemon[] = [];
  isLoading = true;
  error: string | null = null;

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe({
      next: (response) => {
        this.pokemonList = response.results;
        this.isLoading = false;
      },
      error: (e) => {
        this.error = 'Failed to load Pokemon list';
        console.error(e);
        this.isLoading = false;
      }
    })
  }
}
