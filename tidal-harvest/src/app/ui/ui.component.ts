import { Component } from '@angular/core';
import {UiService} from "../core/service/ui.service";
import {Matrix} from "../core/model/Matrix";
import {Coordinates} from "../core/model/Coordinates";
import {FieldType} from "../core/model/field/FieldType";

@Component({
  selector: 'th-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent {

    matrix?: Matrix;

    placing?: FieldType;

    constructor(
        private service: UiService
    ) {
        this.service.getMatrix().subscribe(data => {
            this.matrix = data;
        });
    }

    onFieldClick($event: Coordinates) {
        if (this.placing !== undefined) {
            console.log("placing: " + this.placing + "on: " + $event.x + ";" + $event.y);
            this.service.place(this.placing, $event.x, $event.y);
            this.placing = undefined;
        }
    }

    setPlacing(type: FieldType) {
        if (this.placing == type) {
            this.placing = undefined;
        } else {
            this.placing = type;
        }
    }

    protected readonly FieldType = FieldType;
}
