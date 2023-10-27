import {Component, Input} from '@angular/core';
import {Field} from "../../../core/model/field/Field";

@Component({
  selector: 'th-grid-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
    @Input() field!: Field
}
