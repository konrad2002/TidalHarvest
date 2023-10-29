import {Field} from "../Field";
import {FieldType} from "../FieldType";
import {CropKey} from "./crop/CropKey";

export class Silo extends Field {


    private readonly _cropKey: CropKey;
    private _current: number = 0;
    private _max: number = 1000;
    private _radius: number = 3;

    public constructor(x: number, y: number, cropKey: CropKey) {
        super(FieldType.SILO, x, y);
        this._cropKey = cropKey;
    }

    get cropKey(): CropKey {
        return this._cropKey;
    }

    get max(): number {
        return this._max;
    }

    set max(value: number) {
        this._max = value;
    }

    get current(): number {
        return this._current;
    }

    set current(value: number) {
        this._current = value;
    }

    public inDistance(x: number, y: number): boolean {
        return Math.max(Math.abs(x - this.x), Math.abs(y - this.y)) <= this._radius;
    }


}
