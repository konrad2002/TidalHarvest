import {CropKey} from "../field/farm/crop/CropKey";

export class CropAmount {
    private readonly _cropKey: CropKey;
    private readonly _amount: number;

    public constructor(cropKey: CropKey, amount: number) {
        this._cropKey = cropKey;
        this._amount = amount;
    }

    get cropKey(): CropKey {
        return this._cropKey;
    }

    get amount(): number {
        return this._amount;
    }

}
