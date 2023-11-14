import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'app-popup',
    templateUrl: './popup.component.html',
    styleUrls: ['./popup.component.scss']
})
export class PopupComponent {

    @Input() stepPreparation: string[] = [];
    @Output() closePopupEvent: EventEmitter<void> = new EventEmitter<void>();

    public closePopup(): void {
        this.closePopupEvent.emit();
    }
}
