import {Component, Input} from '@angular/core';
import {GridTile} from "../tile.interface";
import {Field} from "../../../../core/model/field/Field";

@Component({
  selector: 'app-water-channel',
  templateUrl: './water-channel.component.html',
  styleUrls: ['./water-channel.component.scss']
})
export class WaterChannelComponent implements GridTile {
    @Input() field!: Field;

    getBackgroundImage(): string {
        return "water_channel";
    }

}
