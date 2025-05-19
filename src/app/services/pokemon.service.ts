import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';

import { PokemonInterface } from '../interfaces/pokemon.interface';
import { ProductionEnvironment } from '../environments/production.environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private readonly httpClient: HttpClient) { }

  private readonly KEY = ProductionEnvironment.API_URL;
  private readonly PAGINATION = ProductionEnvironment.API_PAGINATION;

  // GET METHOD FOR THE POKE API
  getPokemonList(): Observable<PokemonInterface> {
    return this.httpClient
      .get<PokemonInterface>(`${this.KEY+this.PAGINATION}`)
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
}
