import {Component, Input} from '@angular/core';
import {FieldPopup} from "../field-popup.interface";
import {Farmer} from "../../../../../core/model/field/farm/Farmer";
import {cropTypes} from "./crop-types.constant";
import {UiService} from "../../../../../core/service/ui.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-farmer-popup',
  templateUrl: './farmer-popup.component.html',
  styleUrls: ['./farmer-popup.component.scss']
})
export class FarmerPopupComponent implements FieldPopup{
    @Input() field!: Farmer;

    cropForm: FormGroup;

    constructor(
        private service: UiService,
        private fb: FormBuilder
    ) {
        this.cropForm = this.fb.group( {
            cropType: []
        })
    }

    getTitle(): string {
        return "Agrarökonom";
    }

    protected readonly cropTypes = cropTypes;

    selectCropType() {
        this.service.selectCropType(this.cropForm.value.cropType, this.field.x, this.field.y);
    }
}
