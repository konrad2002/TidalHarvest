import { Component } from '@angular/core';
import {UiService} from "../core/service/ui.service";
import {Matrix} from "../core/model/Matrix";
import {Coordinates} from "../core/model/Coordinates";
import {FieldType} from "../core/model/field/FieldType";
import {PlacingModel} from "./core/model/placing.model";
import {CropKey} from "../core/model/field/farm/crop/CropKey";
import {Price} from "../core/model/economy/Price";
import {CropAmount} from "../core/model/economy/CropAmount";

@Component({
  selector: 'th-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent {

    price: Price;


    matrix?: Matrix;

    placing?: PlacingModel;
    placeMode: boolean = false;

    siloCount: Map<CropKey, number[]> = new Map<CropKey, number[]>();
    unlockedCrops: CropKey[] = [];

    constructor(
        private service: UiService
    ) {
        this.service.getMatrix().subscribe(data => {
            this.matrix = data;
        });
        this.service.cropCount().subscribe(data => {
            this.siloCount = data;
        })
        this.service.unlockedCrops().subscribe(data => {
            this.unlockedCrops = data;
        })

        let ca = new CropAmount(this.CropKey.CORN, 200);
        let ca2 = new CropAmount(this.CropKey.WHEAT, 500);
        this.price = new Price([ca, ca2]);
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

    protected readonly CropKey = CropKey;

    togglePlaceMode() {
        this.placeMode = !this.placeMode;
        this.placing = undefined;
    }
}
