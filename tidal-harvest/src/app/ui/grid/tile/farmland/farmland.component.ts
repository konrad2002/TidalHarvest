import {Component, Input} from '@angular/core';
import {GridTile} from "../tile.interface";
import {Field} from "../../../../core/model/field/Field";

@Component({
  selector: 'th-farmland',
  templateUrl: './farmland.component.html',
  styleUrls: ['./farmland.component.scss']
})
export class FarmlandComponent implements GridTile{
    @Input() field!: Field;
}
