import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'th-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() buttonType: "normal" | "success" | "fail" = "normal";
    @Input() active: boolean = true;
    @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

    onButtonClick() {
        this.buttonClick.emit();
    }
}
