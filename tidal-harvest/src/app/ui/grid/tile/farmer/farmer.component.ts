import {Component, Input} from '@angular/core';
import {Farmer} from "../../../../core/model/field/farm/Farmer";

@Component({
  selector: 'th-farmer',
  templateUrl: './farmer.component.html',
  styleUrls: ['./farmer.component.scss']
})
export class FarmerComponent {
    @Input() field!: Farmer;
}
