import { Component } from '@angular/core';
import { AppState } from '../shared/AppState';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  isLogedin: boolean;

  constructor(private appState: AppState){
    this.isLogedin = false;


    appState.event.subscribe((data) =>{
      this.isLogedin = data;
    } );

  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
