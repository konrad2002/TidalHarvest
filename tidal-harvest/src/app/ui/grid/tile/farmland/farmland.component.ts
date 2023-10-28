import {Component, Input} from '@angular/core';
import {GridTile} from "../tile.interface";
import {Farmland} from "../../../../core/model/field/farm/Farmland";

@Component({
  selector: 'th-farmland',
  templateUrl: './farmland.component.html',
  styleUrls: ['./farmland.component.scss']
})
export class FarmlandComponent implements GridTile{
    @Input() field!: Farmland;
    protected readonly Math = Math;
}
