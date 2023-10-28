import {Component, Input} from '@angular/core';
import {FieldPopup} from "../field-popup.interface";
import {Field} from "../../../../../core/model/field/Field";

@Component({
  selector: 'app-rock-popup',
  templateUrl: './rock-popup.component.html',
  styleUrls: ['./rock-popup.component.scss']
})
export class RockPopupComponent implements FieldPopup{
    @Input() field!: Field;

    getTitle(): string {
        return "Einstein";
    }

}
