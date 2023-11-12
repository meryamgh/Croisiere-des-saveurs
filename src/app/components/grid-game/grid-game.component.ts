import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-game',
  templateUrl: './grid-game.component.html',
  styleUrls: ['./grid-game.component.scss']
})
export class GridGameComponent {
  popupOuverte = false;

  ouvrirPopup() {
    this.popupOuverte = true;
  }

  fermerPopup() {
    this.popupOuverte = false;
  }
}
