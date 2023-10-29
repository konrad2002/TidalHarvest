import {FieldType} from "../../../core/model/field/FieldType";
import {CropKey} from "../../../core/model/field/farm/crop/CropKey";

export interface PlacingModel {
    fieldType: FieldType;
    crop?: CropKey
}
