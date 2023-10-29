import { Component } from '@angular/core';
import {UiService} from "../core/service/ui.service";
import {Matrix} from "../core/model/Matrix";
import {Coordinates} from "../core/model/Coordinates";
import {FieldType} from "../core/model/field/FieldType";
import {PlacingModel} from "./core/model/placing.model";
import {CropKey} from "../core/model/field/farm/crop/CropKey";

@Component({
  selector: 'th-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent {

    matrix?: Matrix;

    placing?: PlacingModel;
    placeMode: boolean = false;

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
            if (this.placing.crop) {
                this.service.placeWithCropType(this.placing.fieldType, this.placing.crop, $event.x, $event.y)
            } else {
                this.service.place(this.placing.fieldType, $event.x, $event.y);
            }
        }
    }

    setPlacing(type: FieldType, crop?: CropKey) {
        if (this.placing && this.placing.fieldType === type && this.placing.crop === crop) {
            this.placing = undefined;
            return;
        }

        this.placing = {
            fieldType: type,
            crop: crop
        }
    }

    protected readonly FieldType = FieldType;

    triggerFlood() {
        this.service.triggerFlood();
    }

    protected readonly CropKey = CropKey;

    togglePlaceMode() {
        this.placeMode = !this.placeMode;
        this.placing = undefined;
    }
}
