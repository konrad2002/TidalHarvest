import {Component, Input} from '@angular/core';
import {Farmer} from "../../../../core/model/field/farm/Farmer";
import {UiService} from "../../../../core/service/ui.service";

@Component({
  selector: 'th-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss']
})
export class FarmerComponent {
    @Input() field!: Farmer;

    constructor(
        private service: UiService
    ) {
    }

    getBackgroundImage() {
        return "farmer";
    }

    collect() {
        this.service.collectCrops(this.field.x, this.field.y);
    }
}
