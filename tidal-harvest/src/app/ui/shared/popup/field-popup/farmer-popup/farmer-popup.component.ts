import {Component, Input} from '@angular/core';
import {FieldPopup} from "../field-popup.interface";
import {Farmer} from "../../../../../core/model/field/farm/Farmer";

@Component({
  selector: 'app-farmer-popup',
  templateUrl: './farmer-popup.component.html',
  styleUrls: ['./farmer-popup.component.scss']
})
export class FarmerPopupComponent implements FieldPopup{
    @Input() field!: Farmer;

    getTitle(): string {
        return "Agrarökonom";
    }
}
