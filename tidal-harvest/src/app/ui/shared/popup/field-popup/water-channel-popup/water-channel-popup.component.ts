import {Component, Input} from '@angular/core';
import {FieldPopup} from "../field-popup.interface";
import {WaterChannel} from "../../../../../core/model/field/water/WaterChannel";

@Component({
  selector: 'app-water-channel-popup',
  templateUrl: './water-channel-popup.component.html',
  styleUrls: ['./water-channel-popup.component.scss']
})
export class WaterChannelPopupComponent implements FieldPopup{
    @Input() field!: WaterChannel;

    getTitle(): string {
        return "Graben";
    }
}
