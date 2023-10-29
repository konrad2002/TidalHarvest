import { Component } from '@angular/core';
import {CropKey} from "../../../core/model/field/farm/crop/CropKey";
import {cropTypes} from "../../shared/popup/field-popup/farmer-popup/crop-types.constant";

@Component({
  selector: 'th-ship',
  templateUrl: './ship.component.html',
  styleUrls: ['./ship.component.scss']
})
export class ShipComponent {

  showShop: boolean = false;

  protected readonly CropKey = CropKey;
  protected readonly cropTypes = cropTypes;
}
