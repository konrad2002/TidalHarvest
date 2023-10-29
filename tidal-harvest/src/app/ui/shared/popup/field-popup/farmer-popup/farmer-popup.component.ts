import {Component, Input} from '@angular/core';
import {FieldPopup} from "../field-popup.interface";
import {Farmer} from "../../../../../core/model/field/farm/Farmer";
import {cropTypes} from "./crop-types.constant";
import {UiService} from "../../../../../core/service/ui.service";
import {FormBuilder, FormGroup} from "@angular/forms";
import {CropKey} from "../../../../../core/model/field/farm/crop/CropKey";

@Component({
  selector: 'app-farmer-popup',
  templateUrl: './farmer-popup.component.html',
  styleUrls: ['./farmer-popup.component.scss']
})
export class FarmerPopupComponent implements FieldPopup{
    @Input() field!: Farmer;

    cropForm: FormGroup;
    unlockedCrops: CropKey[] = [];

    constructor(
        private service: UiService,
        private fb: FormBuilder
    ) {
        this.cropForm = this.fb.group( {
            cropType: []
        })
        this.service.unlockedCrops().subscribe(data => this.unlockedCrops = data);
    }

    getTitle(): string {
        return "Agrarökonom";
    }

    protected readonly cropTypes = cropTypes;

    selectCropType() {
        this.service.selectCropType(this.cropForm.value.cropType, this.field.x, this.field.y);
    }

    collectCropType() {
        this.service.collectCrops(this.field.x, this.field.y);
    }
}
