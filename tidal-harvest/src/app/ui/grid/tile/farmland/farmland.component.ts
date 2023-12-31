import {Component, Input} from '@angular/core';
import {GridTile} from "../tile.interface";
import {FieldType} from "../../../../core/model/field/FieldType";
import {Farmland} from "../../../../core/model/field/farm/Farmland";
import {FarmlandState} from "../../../../core/model/field/farm/FarmlandState";

@Component({
  selector: 'th-farmland',
  templateUrl: './farmland.component.html',
  styleUrls: ['./farmland.component.scss']
})
export class FarmlandComponent implements GridTile{
    @Input() field!: Farmland;
    @Input() placing?: FieldType;

    getBackgroundImage(): string {
        // if (this.field.humidity == 0) return "farmland_sand";

        let str = "farmland_";

        if (this.field.crop) {
            str += this.field.crop.cropKey.toLowerCase() + "_";
        }

        switch (this.field.state) {
            case FarmlandState.PLANTING:
                str += "planting_";
                break;
            case FarmlandState.GROWING:
                str += "growing_";
                break;
            case FarmlandState.HARVESTING:
                str += "harvesting_";
                break;
            default:
                str += "";
                break;
        }

        if (this.field.humidity > 1) {
            str += "wet";
        } else {
            str += "dry";
        }

        return str;
    }

}
