import {Component, Input} from '@angular/core';
import {GridTile} from "../tile.interface";
import {WaterSource} from "../../../../core/model/field/water/WaterSource";
import {UiService} from "../../../../core/service/ui.service";
import {Matrix} from "../../../../core/model/Matrix";
import {FieldType} from "../../../../core/model/field/FieldType";

@Component({
  selector: 'app-water-source',
  templateUrl: './water-source.component.html',
  styleUrls: ['./water-source.component.scss']
})
export class WaterSourceComponent implements GridTile{
  @Input() field!: WaterSource;
  matrix?: Matrix

  constructor(
      private service: UiService
  ) {
    this.service.getMatrix().subscribe(data => this.matrix = data);
  }

  getBackgroundImage(): string {
    if (this.matrix && this.matrix.content[this.field.x][1].fieldType === FieldType.WATER_CHANNEL) return "river_channel";
    return "river_" + ((Math.round((Math.sin(this.field.x * 1.2) + 1)) % 3) + 1);
  }

}
