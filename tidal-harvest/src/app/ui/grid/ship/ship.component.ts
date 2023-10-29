import { Component } from '@angular/core';
import {CropKey} from "../../../core/model/field/farm/crop/CropKey";
import {UiService} from "../../../core/service/ui.service";
import {CropOffer} from "../../../core/model/economy/CropOffer";

@Component({
  selector: 'th-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent {

  showShop: boolean = false;

  cropOffers: CropOffer[] = [];
  unlockedCrops: CropKey[] = [];

  protected readonly CropKey = CropKey;

  constructor(
      private service: UiService
  ) {
    this.cropOffers = this.service.cropUnlockOffers()
    this.service.unlockedCrops().subscribe(data => {
      this.unlockedCrops = data;
    })
  }

  unlockCrop(c: CropOffer) {
    this.service.unlockCrop(c);
  }


}
