import {Field} from "../Field";
import {FieldType} from "../FieldType";
import {CropKey} from "./crop/CropKey";

export class Silo extends Field {

    private readonly _cropKey: CropKey;

    public constructor(x: number, y: number, cropKey: CropKey) {
        super(FieldType.SILO, x, y);
        this._cropKey = cropKey;
    }

    get cropKey(): CropKey {
        return this._cropKey;
    }


}
