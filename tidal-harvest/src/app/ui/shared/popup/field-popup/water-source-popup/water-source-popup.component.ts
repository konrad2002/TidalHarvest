import {Component, Input} from '@angular/core';
import {FieldPopup} from "../field-popup.interface";
import {Field} from "../../../../../core/model/field/Field";
import {WaterSource} from "../../../../../core/model/field/water/WaterSource";

@Component({
  selector: 'app-water-source-popup',
  templateUrl: './water-source-popup.component.html',
  styleUrls: ['./water-source-popup.component.scss']
})
export class WaterSourcePopupComponent implements FieldPopup {
  @Input() field!: WaterSource;

  getTitle(): string {
    return "Nil";
  }

}
