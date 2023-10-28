import {Component, Input} from '@angular/core';
import {GridTile} from "../tile.interface";
import {Field} from "../../../../core/model/field/Field";

@Component({
  selector: 'th-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.scss']
})
export class RockComponent implements GridTile{
    @Input() field!: Field;

    getBackgroundImage(): string {
        return "rock";
    }

}
