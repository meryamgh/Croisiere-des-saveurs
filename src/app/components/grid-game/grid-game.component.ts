import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-grid-game',
  templateUrl: './grid-game.component.html',
  styleUrls: ['./grid-game.component.scss']
})
export class GridGameComponent {
  public popupOuverte: boolean = false;

  constructor(private renderer: Renderer2) {}

  public ouvrirPopup(): void {
    this.popupOuverte = true;
    this.lockScroll();
  }

  public fermerPopup(): void {
    this.popupOuverte = false;
    this.unlockScroll();
  }

  lockScroll(): void {
    const body = document.body;
    this.renderer.setStyle(body, 'position', 'fixed');
    this.renderer.setStyle(body, 'top', '0px');
    this.renderer.setStyle(body, 'left', '0px');
    this.renderer.setStyle(body, 'right', '0px');
  }

  unlockScroll(): void {
    const body = document.body;
    this.renderer.removeStyle(body, 'position');
    this.renderer.removeStyle(body, 'top');
  }
}
