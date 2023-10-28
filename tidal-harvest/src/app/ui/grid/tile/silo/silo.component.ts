import {Component, Input} from '@angular/core';
import {GridTile} from "../tile.interface";
import {Silo} from "../../../../core/model/field/farm/Silo";

@Component({
  selector: 'app-silo',
  templateUrl: './silo.component.html',
  styleUrls: ['./silo.component.scss']
})
export class SiloComponent implements GridTile{
    @Input() field!: Silo;

    getBackgroundImage(): string {
        return "silo";
    }

}
