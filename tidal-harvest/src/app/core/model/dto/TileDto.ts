import {FieldType} from "../field/FieldType";

export interface TileDto {
    x: number
    y: number
    flooded: boolean
    fieldType: FieldType
    humidity: number
    building: any
}
