import {FieldType} from "./FieldType";

export class Field {

    private readonly _fieldType: FieldType;
    private readonly _x: number;
    private readonly _y: number;

    constructor(fieldType: FieldType, x: number, y: number) {
        this._fieldType = fieldType;
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

}
