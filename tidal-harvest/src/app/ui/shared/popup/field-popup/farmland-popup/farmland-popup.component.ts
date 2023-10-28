import {Component, Input} from '@angular/core';
import {FieldPopup} from "../field-popup.interface";
import {Farmland} from "../../../../../core/model/field/farm/Farmland";

@Component({
  selector: 'app-farmland-popup',
  templateUrl: './farmland-popup.component.html',
  styleUrls: ['./farmland-popup.component.scss']
})
export class FarmlandPopupComponent implements FieldPopup{
    @Input() field!: Farmland;

    getTitle(): string {
        return "Acker";
    }

}
