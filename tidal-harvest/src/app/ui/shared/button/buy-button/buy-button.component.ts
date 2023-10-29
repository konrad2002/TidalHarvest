import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Price} from "../../../../core/model/economy/Price";

@Component({
  selector: 'th-buy-button',
  templateUrl: './buy-button.component.html',
  styleUrls: ['./buy-button.component.scss']
})
export class BuyButtonComponent {
  @Input() buttonType: "normal" | "success" | "fail" = "normal";
  @Input() active: boolean = true;
  @Output() buttonClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() buttonTitle!: string;
  @Input() price!: Price;

  onButtonClick() {
    this.buttonClick.emit();
  }
}
