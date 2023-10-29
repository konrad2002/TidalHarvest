import {Component, Input} from '@angular/core';
import {FieldPopup} from "../field-popup.interface";
import {Silo} from "../../../../../core/model/field/farm/Silo";

@Component({
  selector: 'app-silo-popup',
  templateUrl: './silo-popup.component.html',
  styleUrls: ['./silo-popup.component.scss']
})
export class SiloPopupComponent implements FieldPopup{
  @Input() field!: Silo;

  getTitle(): string {
    return "Silo";
  }

}
