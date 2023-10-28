import {Component, Input} from '@angular/core';
import {GridTile} from "../tile.interface";
import {WaterChannel} from "../../../../core/model/field/water/WaterChannel";
import {UiService} from "../../../../core/service/ui.service";
import {Matrix} from "../../../../core/model/Matrix";
import {FieldType} from "../../../../core/model/field/FieldType";

@Component({
  selector: 'app-water-channel',
  templateUrl: './water-channel.component.html',
  styleUrls: ['./water-channel.component.scss']
})
export class WaterChannelComponent implements GridTile {
    @Input() field!: WaterChannel;
    matrix?: Matrix;

    constructor(
        private service: UiService
    ) {
        this.service.getMatrix().subscribe(data => this.matrix = data);
    }

    getBackgroundImage(): string {
        if (!this.matrix) return "water_channel";

        const x = this.field.x;
        const y = this.field.y;

        let str = "water/water_channel";

        if (x > 0 && this.matrix.content[x-1][y].fieldType === FieldType.WATER_CHANNEL) str += "_top";
        if (y < this.matrix.y-1 && this.matrix.content[x][y+1].fieldType === FieldType.WATER_CHANNEL) str += "_right";
        if (x < this.matrix.x-1 && this.matrix.content[x+1][y].fieldType === FieldType.WATER_CHANNEL) str += "_bottom";
        if (y > 0 && this.matrix.content[x][y-1].fieldType === FieldType.WATER_CHANNEL) str += "_left";

        return str;
    }

}
