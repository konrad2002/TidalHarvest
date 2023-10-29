import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'th-big-popup',
  templateUrl: './big-popup.component.html',
  styleUrls: ['./big-popup.component.scss']
})
export class BigPopupComponent {
  @Input() popupTitle: string = "Mitteilung";
  @Output() close: EventEmitter<any> = new EventEmitter<any>();

  onClose() {
    this.close.emit();
  }
}
