import {Component, Input} from '@angular/core';
import {Field} from "../../../../../core/model/field/Field";
import {FieldPopup} from "../field-popup.interface";

@Component({
  selector: 'app-water-channel-popup',
  templateUrl: './water-channel-popup.component.html',
  styleUrls: ['./water-channel-popup.component.scss']
})
export class WaterChannelPopupComponent implements FieldPopup{
    @Input() field!: Field;

    getTitle(): string {
        return "Graben";
    }
}
