import {FieldType} from "../../../core/model/field/FieldType";
import {CropKey} from "../../../core/model/field/farm/crop/CropKey";
import {BuildingType} from "../../../core/model/field/BuildingType";

export interface PlacingModel {
    buildingType: BuildingType;
    crop?: CropKey
}
