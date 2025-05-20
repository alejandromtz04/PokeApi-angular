import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

import { PokemonInterface } from '../interfaces/pokemon.interface';
import { PokemonDetailsInterface } from '../interfaces/pokemon-detail.interface';
import { ProductionEnvironment } from '../environments/production.environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private readonly httpClient: HttpClient) {}

  private readonly URL = ProductionEnvironment.API_URL;
  private readonly PAGINATION = ProductionEnvironment.API_PAGINATION;

  // GET METHOD FOR THE POKE API
  getPokemonList(): Observable<PokemonInterface> {
    return this.httpClient
      .get<PokemonInterface>(`${this.URL + this.PAGINATION}`)
      .pipe(
        catchError((error) => {
          console.error('Error fetching pokemon list: ', error);

          return of({
            count: 0,
            next: null,
            previous: null,
            results: [],
          } as PokemonInterface);
        })
      );
  }

  // METHOD OF GET ONE BY ID

  getPokemonDetailsById(id: number): Observable<any> {
   return this.httpClient.get(`${this.URL}/pokemon/${id}`)
    .pipe(
      catchError(this.handleError<any>(`getPokemonDetailsById = ${id}`))
    )
  }

  private transformPokemonData(data: any): PokemonDetailsInterface {
    return {
      id: data.id,
      name: data.name,
      height: data.height / 10, // Convert to meters
      weight: data.weight / 10, // Convert to kg
      sprites: {
        front_default: data.sprites.front_default,
      },
      stats: data.stats.map((stat: any) => ({
        base_stat: stat.base_stat,
        stat: {
          name: stat.stat.name
        }
      })),
      types: data.types.map((type: any) => ({
        type: {
          name: type.type.name
        }
      })),
      abilities: data.abilities.map((ability: any) => ({
        ability: {
          name: ability.ability.name
        }
      }))
    };
  }

  // ERROR HANDLER

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation} failed:`, error);
      return of(result as T);
    };
  }
}
