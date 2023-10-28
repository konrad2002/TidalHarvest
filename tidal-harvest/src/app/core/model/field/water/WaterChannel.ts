import {Field} from "../Field";
import {FieldType} from "../FieldType";

export class WaterChannel extends Field {

    private _powered: boolean = false;
    public constructor(x: number, y: number) {
        super(FieldType.WATER, x, y);
    }

    get powered(): boolean {
        return this._powered;
    }

    set powered(value: boolean) {
        this._powered = value;
    }


}
