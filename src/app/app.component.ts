import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonComponent } from './pokemon/pokemon.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgClass, NgIf } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PokemonComponent, NavBarComponent, NgClass, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

}
