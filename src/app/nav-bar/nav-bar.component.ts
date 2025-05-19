import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-nav-bar',
  imports: [NgClass, NgIf],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isCollapsed = true;

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
}
