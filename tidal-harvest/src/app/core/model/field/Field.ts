import {FieldType} from "./FieldType";
import {BuildingType} from "./BuildingType";

export class Field {

    private readonly _fieldType: FieldType;
    private readonly _buildingType?: BuildingType;
    private readonly _x: number;
    private readonly _y: number;


    constructor(fieldType: FieldType, x: number, y: number, buildingType?: BuildingType) {
        this._fieldType = fieldType;
        this._buildingType = buildingType;
        this._x = x;
        this._y = y;
    }


    get fieldType(): FieldType {
        return this._fieldType;
    }

    get y(): number {
        return this._y;
    }

    get x(): number {
        return this._x;
    }


    get buildingType(): BuildingType | undefined {
        return this._buildingType;
    }
}
