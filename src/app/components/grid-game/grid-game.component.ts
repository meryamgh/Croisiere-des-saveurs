import { Component } from '@angular/core';

@Component({
  selector: 'app-grid-game',
  templateUrl: './grid-game.component.html',
  styleUrls: ['./grid-game.component.scss']
})
export class GridGameComponent {
  public popupOuverte:boolean = false;

  public ouvrirPopup():void {
    this.popupOuverte = true;
    this.lockScroll();
  }

  public fermerPopup():void {
    this.popupOuverte = false;
    this.unlockScroll();
  }
  lockScroll(): void {
    const body = document.body;

    body.style.position = 'fixed';
    body.style.top = '0px';
    body.style.left = '0px';
    body.style.right = '0px';

  }

  unlockScroll(): void {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = '';
    body.style.top = '';
    window.scrollTo(0, parseInt(scrollY || '0') * -1);
  }
}
