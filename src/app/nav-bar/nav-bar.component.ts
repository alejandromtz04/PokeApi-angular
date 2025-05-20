import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { TreeSelectModule } from 'primeng/treeselect'

@Component({
  selector: 'app-nav-bar',
  imports: [NgClass, NgIf, TreeSelectModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {

  isCollapsed = true;
  findQuery: string = '';

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }

}
