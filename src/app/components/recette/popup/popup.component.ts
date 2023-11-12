import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

    @Input() etapesPreparation: string[] = [];
    @Output() popupFerme: EventEmitter<void> = new EventEmitter<void>();

    public fermerPopup() {
        this.popupFerme.emit();
    }
}
