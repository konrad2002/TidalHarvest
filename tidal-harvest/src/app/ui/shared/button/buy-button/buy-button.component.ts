import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Price} from "../../../../core/model/economy/Price";
import {UiService} from "../../../../core/service/ui.service";
import {CropKey} from "../../../../core/model/field/farm/crop/CropKey";

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
  @Input() price?: Price;

  @Input() wide: boolean = false;
  private crops: Map<CropKey, number[]> = new Map<CropKey, number[]>();

  constructor(
      private service: UiService
  ) {
    this.service.cropCount().subscribe(data => {
      this.crops = data
      this.checkAffordable()
    });
  }

  onButtonClick() {
    this.buttonClick.emit();
  }

  checkAffordable() {
    if (!this.price || !this.price.price) {
      this.active = false;
      return;
    }
    let a = false;
    for (const p of this.price.price ) {
      let crop = this.crops.get(p.cropKey);
      if (crop && crop[0] >= p.amount) a = true;
    }

    let allAff = true;
    for (const p of this.price.price ) {
      if (p.amount != 0) allAff = false;
    }

    if (allAff) a = true;

    this.active = a;
  }
}
